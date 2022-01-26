import Footer from "../component/footer";
import Header from "../component/header";
import ListProduct from "../component/listProduct";

const HomePage = {
    async render() {
        return /* html */ `
        ${Header.render()}
            <!-- home section starts  -->
            <section class="home" id="home">

                <div class="row">

                    <div class="content">
                        <h3>upto 73% off</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi animi facere vel reprehenderit ullam reiciendis dignissimos. Quia, sint dolor.</p>
                        <a href="" class="btn">Shop now</a>
                    </div>

                    <div class="swiper books-slider">

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
        
                <div class="swiper featured-slider">
                    
                    <div class="swiper-wrapper">
        
                        ${await ListProduct.render()}
                        
                    </div>

                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
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

                <h1 class="heading"> <span>new arrivals</span> </h1>

                <div class="swiper arrivals-slider" >

                    <div class="swiper-wrapper">
                        ${await ListProduct.listArrivals()}
                    </div>

                </div>

                <div class="swiper arrivals-slider" >

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

                <h1 class="heading"> <span>Members reviews</span> </h1>

                <div class="swiper reviews-slider" >

                    <div class="swiper-wrapper">

                        <div class="swiper-slide box">
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

                <h1 class="heading"> <span>our blogs</span> </h1>

                <div class="swiper blogs-slider">

                    <div class="swiper-wrapper">

                        ${await ListProduct.listBlogs()}

                    </div>

                </div>

            </section>

             <!-- blogs section starts  -->

             


        ${Footer.render()}
        `;
    },

    afterRender() {
        const searchForm = document.querySelector(".search-form");

        document.querySelector("#search-btn").onclick = () => {
            searchForm.classList.toggle("active");
        };

        const loginForm = document.querySelector(".login-form-container");

        document.querySelector("#login-btn").onclick = () => {
            loginForm.classList.toggle("active");
        };

        document.querySelector("#close-login-btn").onclick = () => {
            loginForm.classList.remove("active");
        };

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
        swiper.on();
        swiper2.on();
        swiper3.on();
        swiper4.on();
        swiper5.on();
    },

};

export default HomePage;