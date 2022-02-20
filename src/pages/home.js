// eslint-disable-next-line import/no-unresolved
import Swiper from "swiper/bundle";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/bundle";
import toastr from "toastr";
import { getProductById } from "../api/products";
import Footer from "../component/footer";
import Header from "../component/header";
import ListProduct from "../component/listProduct";
import { reRender } from "../utils";
import { addToCart } from "../utils/cart";
import "toastr/build/toastr.min.css";

const HomePage = {
    async render() {
        return /* html */ `
        ${Header.render()}
            <!-- home section starts  -->
            <section class="home" id="home">

                <div class="row2">

                    <div class="content">
                        <h3>upto 73% off</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi facere vel reprehenderit ullam reiciendis dignissimos. Quia, sint dolor.</p>
                        <a href="" class="btn-shop-now">Shop now</a>
                    </div>

                    <div class="swiper books-slider z-0">

                        <div class="swiper-wrapper">
                            <a href="#" class="swiper-slide"><img src="image/book-1.png" alt=""></a>
                            <a href="#" class="swiper-slide"><img src="image/book-2.png" alt=""></a>
                            <a href="#" class="swiper-slide"><img src="image/book-3.png" alt=""></a>
                            <a href="#" class="swiper-slide"><img src="image/book-4.png" alt=""></a>
                            <a href="#" class="swiper-slide"><img src="image/book-5.png" alt=""></a>
                            <a href="#" class="swiper-slide"><img src="image/book-6.png" alt=""></a>    
                        </div>
                        <img src="image/stand.png" class="stand" alt="">
                    </div>

                </div>

            </section>
            
            <!-- home section end  -->

            <!-- icons section starts  -->

            <section class="icons-container">

                <div class="icons">
                    <i class="fas fa-shipping-fast"></i>
                    <div class="content">
                        <h3>free shipping</h3>
                        <p>order over $100</p>
                    </div>
                </div>

                <div class="icons">
                    <i class="fas fa-lock"></i>
                    <div class="content">
                        <h3>secure payment</h3>
                        <p>100 secure payment</p>
                    </div>
                </div>

                <div class="icons">
                    <i class="fas fa-redo-alt"></i>
                    <div class="content">
                        <h3>easy returns</h3>
                        <p>10 days returns</p>
                    </div>
                </div>

                <div class="icons">
                    <i class="fas fa-headset"></i>
                    <div class="content">
                        <h3>24/7 support</h3>
                        <p>call us anytime</p>
                    </div>
                </div>

            </section>

            <!-- icons section end  -->

            <!-- featured section starts  -->

            <section class="featured" id="featured">

                <h1 class="heading"> <span>featured books</span></h1>
        
                <div class="swiper featured-slider z-0">
                    
                    <div class="swiper-wrapper products-container ">
        
                        ${await ListProduct.render()}
                        
                    </div>

                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>

                <div class="products-preview">
                    ${await ListProduct.render2()}
                </div>
               
            </section>

            <!-- featured section ends -->

            <!-- newsletter section starts ---->

            <section class="newsletter">

                <form action="">
                <h3>subscribe for latest updates</h3>
                <input type="email" name="" placeholder="enter your email" id="" class="box">
                <input type="submit" value="subscribe" class="btn">
                </form>
                
            </section>

              <!-- newsletter section starts ---->

              <!-- arrivals section starts  -->

            <section class="arrivals" id="arrivals">

                <h1 class="heading -z-10"> <span>new arrivals</span> </h1>

                <div class="swiper arrivals-slider " >

                    <div class="swiper-wrapper ">
                        ${await ListProduct.listArrivals()}
                    </div>

                </div>

                <div class="swiper arrivals-slider " >

                    <div class="swiper-wrapper">
                        ${await ListProduct.listArrivals()}
                    </div>

                </div>

            </section>

            <!-- arrivals section starts  -->

            <!-- deal section starts  -->

            <section class="deal">

                <div class="content">
                <h3>deal of the day</h3>
                <h1>upto 50% off</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto sit, possimus molestiae unde voluptate dolorum voluptatem maiores ex.</p>
                <a href="" class="btn">shop now</a>
                </div>

                <div class="image">
                    <img src="image/deal-img.jpg" alt="">
                </div>

            </section>

            <!-- deal section ends -->

            <!-- reviews section starts  -->

            <section class="reviews" id="reviews">

                <h1 class="heading -z-10"> <span>Members reviews</span> </h1>

                <div class="swiper reviews-slider  " >

                    <div class="swiper-wrapper ">

                        <div class="swiper-slide box ">
                        <img src="image/pic-1.png" alt="">
                            <h3>Long Vũ Tiến</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        </div>

                        <div class="swiper-slide box">
                        <img src="image/pic-2.png" alt="">
                            <h3>Vũ Tiến Long</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>

                        <div class="swiper-slide box">
                        <img src="image/pic-3.png" alt="">
                            <h3>Long Vũ Tiến</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        </div>

                        <div class="swiper-slide box">
                        <img src="image/pic-4.png" alt="">
                            <h3>Long Vũ Tiến</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        </div>

                        <div class="swiper-slide box">
                        <img src="image/pic-5.png" alt="">
                            <h3>Long Vũ Tiến</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nihil ipsa placeat. Aperiam at sint, eos ex similique facere hic.</p>
                            <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        </div>

                    </div>

                </div>

            </section>

             <!-- reviews section ends -->
            
             <!-- blogs section starts  -->
            <section class="blogs" id="blogs">

                <h1 class="heading -z-10"> <span>our blogs</span> </h1>

                <div class="swiper blogs-slider ">

                    <div class="swiper-wrapper">

                        ${await ListProduct.listBlogs()}

                    </div>

                </div>

            </section>

             <!-- blogs section starts  -->

             


        ${Footer.render()}
        `;
    },

    async afterRender() {
        Header.afterRender();
        const searchForm = document.querySelector(".search-form");

        document.querySelector("#search-btn").onclick = () => {
            searchForm.classList.toggle("active");
        };

        // eslint-disable-next-line no-unused-vars
        const swiper = new Swiper(".books-slider", {
            loop: true,

            centeredSlides: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
        // Sswiper.onload();

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
        // eslint-disable-next-line no-unused-vars
        const swiper3 = new Swiper(".arrivals-slider", {
            spaceBetween: 10,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
        // eslint-disable-next-line no-unused-vars
        const swiper4 = new Swiper(".reviews-slider", {
            spaceBetween: 10,
            grabCursor: true,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
        });
        // eslint-disable-next-line no-unused-vars
        const swiper5 = new Swiper(".blogs-slider", {
            spaceBetween: 10,
            grabCursor: true,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 9500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
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
        const btnAddToCart = document.querySelectorAll("#btnAddToCart");

        btnAddToCart.forEach(async (e) => {
            // const { id } = btnAddToCart.dataset;
            const { id } = e.dataset;
            console.log(id);

            await e.addEventListener("click", async () => {
                console.log(1212);
                const { data } = await getProductById(id);
                console.log(data);
                // add sp vao cart quantity mặc định = 1
                // eslint-disable-next-line max-len
                addToCart({ ...data, quantity: 1 }, () => {
                    toastr.success("Thêm thành công 1 sản phẩm vào giỏ hàng");
                    reRender(Header, "header");
                });
            });
        });
    },

};

export default HomePage;