// eslint-disable-next-line import/no-unresolved
import Swiper from "swiper/bundle";

// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";
import toastr from "toastr";
import { getProductById, update } from "../api/products";
import Footer from "../component/footer";
import Header from "../component/header";
import ListProduct from "../component/listProduct";
import { addToCart } from "../utils/cart";
import "toastr/build/toastr.min.css";
import { reRender, reRender2 } from "../utils";
import { addComment } from "../api/comment";

const DetailProduct = {
    async render(id) {
        const { data } = await getProductById(id);
        // console.log(data);

        console.log(data);
        return /* html */ `
          
            ${Header.render()}
            <section class="container_detail ">
            <div class="image-detail">
    
               <div class="">
                  <img src="${data.img}" alt="" width="350" id="main_img">
               </div>
    
                <div class="mini">
                  <img src="../image/book-3.png" alt="" width="120" class="small-img">
                  <img src="../image/book-4.png" alt="" width="120" class="small-img">
                  <img src="../image/book-5.png" alt="" width="120" class="small-img">
                     
                </div>
            </div>
    
            <div class="product-information">
                
                <h1 class="text-4xl">${data.productName}</h1>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>

                <p class ="mt-8 ">Be the first to review this product</p>
                <p class="price_now">${data.price} <span class="price_old">${data.price}</span></p>
                <p class="font-bold  ">QUICK OVERVIEW</p>
                <p class=" text-sm mt-1 ">Ut metus. Maecenas dapibus nibh eu est. Proin faucibus pharetra nibh. Integer aliquet tellus in felis. Quisque mi pede, imperdiet a, dapibus vel, bibendum rhoncus, nulla. Sed eu velit. Maecenas molestie, ipsum nec nonummy mattis, ipsum lectus imperdiet nibh</p>

                <div class="quantity">

                    <span>Quantity: </span>
                    <input type="number"  name="" id="quantityProduct" min="0" max="100">

                </div>

                <div class="buttons">
                    <a href="#" class="buy">buy now</a>
                   <a data-id="${data.id}" class="cart"  id="btnAddToCart" >add to cart</a>
                </div>
            </div>
        </section>
        
        <!-- end product detail -->

         <!-- comment  start-->
        <section class="comment">

        <h1 class="heading"> <span>Review</span></h1>

            ${await ListProduct.listCommentByIdProduct(id)}

           
                ${JSON.parse(localStorage.getItem("user")) ? `
                <form  id="formComment"  style="border: 1px solid #E8E8E8; background-color: #E8E8E8; padding: 5px 10px;">
                
                <input type="text" name="commentInput" id="commentInput" class="shadow-sm border-solid px-2 py-1 w-full mt-1 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Comment's here">
                </form>
                ` : `
                    <p style="color: red;background:#ddd; padding:5px 10px" >Đăng nhập để bình luận về sản phẩm này</p>
                `}
            
            </div>

        </section>

         <!-- related products start -->
        <section class="featured">

            <h1 class="heading"> <span>Related Products</span></h1>
            
                <div class="swiper featured-slider z-0">
                        
                <div class="swiper-wrapper products-container ">

                    ${await ListProduct.listProductByCategory()}
                    
                </div>

                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>

            <div class="products-preview">
                ${await ListProduct.listProductByCategory2()}
            </div>

        </section>
            ${Footer.render()}
        `;
    },

    async afterRender(id) {
        const { data } = await getProductById(id);
        // call api ++ view
        // console.log(id);
        await update({
            id,
            productName: data.productName,
            img: data.img,
            price: data.price,
            quantity: data.quantity,
            description: data.description,
            view: data.view ? data.view + 1 : 1,
        });

        const mainImg = document.getElementById("main_img");
        const smallImg = document.getElementsByClassName("small-img");

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < smallImg.length; i++) {
            smallImg[i].onclick = () => {
                mainImg.src = smallImg[i].src;
            };
        }

        // eslint-disable-next-line no-unused-vars
        const swiper2 = new Swiper(".featured-slider", {
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                450: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            },
        });

        const preveiwContainer = await document.querySelector(".products-preview");
        const previewBox = await preveiwContainer.querySelectorAll(".preview");

        document.querySelectorAll(".product").forEach((product) => {
            // eslint-disable-next-line no-param-reassign
            product.onclick = () => {
                preveiwContainer.style.display = "flex";
                const name = product.getAttribute("data-name");
                previewBox.forEach((preview) => {
                    const target = preview.getAttribute("data-target");
                    if (name === target) {
                        preview.classList.add("active");
                    }
                });
            };
        });

        previewBox.forEach((close) => {
            // eslint-disable-next-line no-param-reassign
            close.querySelector(".fa-times").onclick = () => {
                close.classList.remove("active");
                preveiwContainer.style.display = "none";
            };
        });

        // add to cart
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const idAddtocart = btnAddToCart.dataset.id;
        console.log(id);
        const quantityProduct = document.querySelector("#quantityProduct");

        btnAddToCart.addEventListener("click", async () => {
            console.log(quantityProduct.value);
            const dataAddtoCart = await getProductById(idAddtocart).data;
            console.log(dataAddtoCart);
            // add sp vao cart quantity mặc định = 1
            // eslint-disable-next-line max-len
            addToCart({ ...dataAddtoCart, quantity: quantityProduct.value ? quantityProduct.value : 1 }, () => {
                toastr.success(`Thêm thành công ${quantityProduct.value} sản phẩm vào giỏ hàng`);
                reRender(Header, "header");
            });
        });

        if (JSON.parse(localStorage.getItem("user"))) {
            // const formComment = $("#formComment");
            const formComment = document.querySelector("#formComment");

            formComment.addEventListener("submit", async (e) => {
                e.preventDefault();

                const today = new Date();
                const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
                addComment({
                    content: document.querySelector("#commentInput").value,
                    product: data,
                    user: JSON.parse(localStorage.getItem("user")).user,
                    time,
                }).then(async () => {
                    alert("Comment Successfully");
                    console.log(id);
                    await reRender2(DetailProduct, id, "#app");
                });
            });
        }
    },
};

export default DetailProduct;