import Footer from "../component/footer";
import Header from "../component/header";
import { reRender } from "../utils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../utils/cart";

const Cart = {
    render() {
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
                                        <p class="price">$32.00</p>
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

                        <div class=" don_hang">
                        
                            <div>
                            
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
                                    <input id="tong2" type="text" value="<?= $tong ?>" style="display: none;">

                                    <p>$<span id="tongDonHang"></span>.00</p>

                                </div>
                                <div class="flex justify-between py-2">
                                    <p class="font-bold">Trả tiền mặt khi nhận hàng</p>

                                </div>
                                <div class=" py-2">
                                    <button type="submit" class="btn btn_thanh_toan" name="thanh_toan">Thanh toán</button>


                                </div>
                            </div>

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
    },
};

export default Cart;