import { getProductById } from "../api/products";
import Footer from "../component/footer";
import Header from "../component/header";
import ListProduct from "../component/listProduct";

const DetailProduct = {
    async render(id) {
        const found = await getProductById(id);
        const { data } = found;
        console.log(data);
        return /* html */ `
            ${Header.render()}
            <section class="container_detail ">
            <div class="image-detail">
    
               <div class="">
                  <img src="../${data.img}" alt="" width="350" id="main_img">
               </div>
    
                <div class="mini">
                  <img src="../image/book-3.png" alt="" width="120" class="small-img">
                  <img src="../image/book-4.png" alt="" width="120" class="small-img">
                  <img src="../image/book-5.png" alt="" width="120" class="small-img">
                     
                </div>
            </div>
    
            <div class="product-information">
                
                <h1 class="text-4xl">${data.title}</h1>
                <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>

                <p class ="mt-8 ">Be the first to review this product</p>
                <p class="price_now  ">${data.price_now} <span class="price_old">${data.price_old}</span></p>
                <p class="font-bold  ">QUICK OVERVIEW</p>
                <p class=" text-sm mt-1 ">Ut metus. Maecenas dapibus nibh eu est. Proin faucibus pharetra nibh. Integer aliquet tellus in felis. Quisque mi pede, imperdiet a, dapibus vel, bibendum rhoncus, nulla. Sed eu velit. Maecenas molestie, ipsum nec nonummy mattis, ipsum lectus imperdiet nibh</p>

                <div class="quantity">

                    <span>Quantity: </span>
                    <input type="number" name="" id="" min="0" max="100">

                </div>

                <div class="buttons">
                <a href="#" class="buy">buy now</a>
                <a href="#" class="cart">add to cart</a>
            </div>
            </div>
        </section>
        
        <!-- end product detail -->

         <!-- comment  start-->
        <section class="comment">

        <h1 class="heading"> <span>Review</span></h1>

            <div class="content">

                <div class="info">

                    <a href=""><img src="../image/pic-2.png" alt="" width="40"></a>

                    <div>

                        <p>Vũ Tiến Long</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>

                    </div>

                </div>

                <div class="content-comment">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat placeat quis, illum earum accusamus necessitatibus autem nobis molestiae cumque amet adipisci consectetur consequuntur ea nulla reprehenderit, id at tenetur.</p>

                </div>

            </div>

            <div class="content">

                <div class="info">

                    <a href=""><img src="../image/pic-2.png" alt="" width="40"></a>

                    <div>

                        <p>Vũ Hoàng Đức</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>

                    </div>

                </div>

                <div class="content-comment">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat placeat quis, illum earum accusamus necessitatibus autem nobis molestiae cumque amet adipisci consectetur consequuntur ea nulla reprehenderit, id at tenetur.</p>

                </div>

            </div>

            <div class="content">

                <div class="info">

                    <a href=""><img src="../image/pic-2.png" alt="" width="40"></a>

                    <div>

                        <p>Vũ Tiến Minh 2</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>

                    </div>

                </div>

                <div class="content-comment">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis fugiat placeat quis, illum earum accusamus necessitatibus autem nobis molestiae cumque amet adipisci consectetur consequuntur ea nulla reprehenderit, id at tenetur.</p>
                </div>

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

    async afterRender() {
        const mainImg = document.getElementById("main_img");
        const smallImg = document.getElementsByClassName("small-img");

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < smallImg.length; i++) {
            smallImg[i].onclick = () => {
                mainImg.src = smallImg[i].src;
            };
        }

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
    },
};

export default DetailProduct;