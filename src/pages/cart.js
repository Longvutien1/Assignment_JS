import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import { addOrder } from "../api/order";
import Footer from "../component/footer";
import Header from "../component/header";
import ListProduct from "../component/listProduct";

import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";

const Cart = {
    async render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `
        ${Header.render()}
            <section class="cart">
                <h1>Shopping Cart</h1>
            
                <div class="container-cart">
            
                    <div class="list_product">
                        ${cart.map((item) => `
                            <div class="product_cart">
                               
                                <span class="del"> <button type="submit" data-id="${item.id}" class="btn btn-remove" ><i class="fas fa-times" ></i></button></span>
                                <div class="image">
                                    <img src="${item.img}" alt="" width="150">
                                </div>
                        
                                <div class="info-product">
                                    <div>
                                        <p class="name">${item.productName}</p>
                                        <p class="price">$${item.price}</p>
                                    </div>
                        
                                    <div class="flex">
                                        <button type="submit" data-id="${item.id}" class="btn btn-increase px-3 h-10 my-auto mx-1 rounded-xl text-white border " style="background: #27AE60" >+</button>
                                        <input type="text" class="h-10 my-auto w-14 text-center font-bold" value="${item.quantity}">
                                        <button type="submit" data-id="${item.id}" class="btn btn-decrease px-3 h-10 my-auto mx-1 rounded-xl text-white border " style="background: #27AE60" >-</button>
                                    </div>
                                    <p> In Stoke</p>
                                </div>
                            </div>
                        `)}

                    </div>

                    <div class="order">
                    <h2>Order summary</h2>

                        <div class="don_hang">
                        
                                ${await ListProduct.listProductInCart()}
                                <div class="dl_don_hang" >
                                    <p>Tạm tính</p>
                                    <p>$<?= $tong ?>.00</p>

                                </div>

                                <div class="dl_don_hang">
                                    <p>Phí vận chuyển</p>
                                    <p>$<span id="phi_vc"></span>.00</p>

                                </div>
                                <div class="dl_don_hang">
                                    <p>Tổng</p>
                                  

                                    <p>$<span id="tongDonHang"></span>.00</p>

                                </div>
                                <div class="flex justify-between py-4">
                                    <p class="font-bold">Trả tiền mặt khi nhận hàng</p>

                                </div>
                                <div class=" py-2">
                                    <button type="submit" class="btn_thanh_toan" name="thanh_toan">Thanh toán</button>

                                </div>
                                
                            </div>

                        </div>
                        <div class="formThanhToan">
                            <form class="preview" >
                                <i class="removeform fas fa-times"></i>
                                <p>Full Name</p>
                                <input type="text" name="fullname" id="fullname"  placeholder="Full Name">
                                <p>Phone</p>
                                <input type="text" name="phone" id="phone"  placeholder="Phone">
                                <p>Address</p>
                                <input type="text" name="address" id="address" placeholder="Address">
                                <select id="noi-nhan" name="noi-nhan"   class="my-4 text-left" style="border: 1px solid #219150;">
                                    <option value="Home" >Home</option>
                                    <option value="Company" >Company</option>
                                
                                </select>
                                
                                <p>Specific address</p>
                                <div class="mt-1">
                                <textarea id="specific-address" name="specific-address" id="specific-address" rows="3" class="px-2 py-1 w-full mt-1 block w-full sm:text-sm rounded-md" style="border: 1px solid #219150;" placeholder="Specific address"></textarea>
                                </div>
                            
                            
                                <div class="buttons">
                                <button type="submit" id="btn_buy_now" class="cart text-center">Buy now</button>
                               
                                </div>
                            </form>
                        </div>
                    </div>
                   
                   
            
                </div>
            
            </section>
            ${Footer.render()}
        `;
    },

    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((button) => {
            button.addEventListener("click", () => {
                const { id } = button.dataset;
                if (button.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(Cart, "#app");
                    });
                } else if (button.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(Cart, "#app");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(Cart, "#app");
                    });
                }
            });
        });
        let sumMonney = 0;
        const log = JSON.parse(localStorage.getItem("cart"));

        log.forEach((e) => {
            // console.log(e.price);
            // console.log(e.quantity);
            sumMonney += (Number(e.price) * Number(e.quantity));
        });
        console.log(sumMonney);
        document.querySelector("#tongDonHang").innerHTML = sumMonney;

        // thanh toán
        const btnThanhToan = document.querySelector(".btn_thanh_toan");
        const formThanhToan = document.querySelector(".formThanhToan");

        btnThanhToan.addEventListener("click", () => {
            formThanhToan.classList.add("active");
        });

        document.querySelector(".removeform").onclick = () => {
            formThanhToan.classList.remove("active");
        };
        const formOrder = $(".preview");
        // const formOrder = document.querySelector(".preview");
        formOrder.validate({
            rules: {
                fullname: {
                    required: true,
                    minlength: 6,
                },
                phone: {
                    required: true,
                    minlength: 10,
                },
                address: {
                    required: true,
                    minlength: 6,
                },
                "noi-nhan": {
                    required: true,
                    minlength: 1,
                },
                "specific-address": {
                    required: true,
                    minlength: 6,
                },

            },
            messages: {
                fullname: {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 6 characters ",

                },
                phone: {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 10 characters ",

                },
                address: {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 6 characters ",

                },
                "noi-nhan": {
                    required: "This Field Is Required. ",

                },
                "specific-address": {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 6 characters ",

                },
            },
            submitHandler: () => {
                // console.log(document.querySelector("#categoryId").value);
                let cart = [];
                if (localStorage.getItem("cart")) {
                    cart = JSON.parse(localStorage.getItem("cart"));
                }
                async function handleAddpost() {
                    addOrder({
                        userInformation: {
                            fullname: document.querySelector("#fullname").value,
                            phone: document.querySelector("#phone").value,
                            address: document.querySelector("#address").value,
                            noiNhan: document.querySelector("#noi-nhan").value,
                            specificAddress: document.querySelector("#specific-address").value,
                            status: 0,
                        },
                        product: {

                            listProduct: cart,

                        },

                    }).then(() => {
                        alert("Order Successfully");
                        reRender(Cart, "#app");
                    });
                }
                handleAddpost();
            },
        });
    },
};

export default Cart;