import { getAllProduct } from "../api/products";

const ListProduct = {
    async render() {
        const { data } = await getAllProduct();
        // console.log(data);
        return /* html */ `
                    ${data
        .map(
            (item) => `
                            <div class="swiper-slide box "  >
                                <div class="icons">
                                    <a href="" class="fas fa-shopping-cart"></a>
                                    <a href="" class="fas fa-heart"></a>
                                    <a href="/detail_product/${item.id}" class="fas fa-eye"></a>
                                    </div>    

                                    <div class="image product" data-name="p-${item.id}">
                                        <img src="${item.img}" alt="">
                                    </div>

                                    <div class="content">
                                    <h3>${item.title}</h3>
                                    <div class="price">${item.price_now} <span>${item.price_old}</span></div>
                                    <a href="#" class="btn">add to cart</a>
                                </div>

                            </div>

                        
                    `,
        )
        .join("")}
            
            
            
            
                `;
    },

    async render2() {
        const { data } = await getAllProduct();
        // console.log(data);
        return /* html */ `
                    ${data
        .map(
            (item) => `

                            <div class="preview" data-target="p-${item.id}">
                                <i class="fas fa-times"></i>
                                <img src="${item.img}" alt="">
                                <h3>${item.title}</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <span>( 250 )</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                                <div class="price">${item.price_now}</div>
                                <div class="buttons">
                                    <a href="#" class="buy">buy now</a>
                                    <a href="#" class="cart">add to cart</a>
                                </div>
                            </div>
                
              
                    `,
        )
        .join("")}
            
            
            
            
                `;
    },

    async listArrivals() {
        const { data } = await getAllProduct();
        return /* html */ `
                    ${data
        .map(
            (item) => `
                                <div  class="swiper-slide box" >
                                    <div class="image">
                                        <img src="${item.img}" alt="">
                                    </div>
                                    <div class="content">
                                        <h3>${item.title}</h3>
                                        <div class="price">${item.price_now} <span>${item.price_old}</span></div>
                                        <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star-half-alt"></i>
                                        </div>
                                    </div>
                                </div>

                             
                                
                        `,
        )
        .join("")}
                `;
    },

    async listBlogs() {
        return /* html */ `
                <div class="swiper-slide box">
                <div class="image">
                <img src="image/blog-1.jpg" alt="">
                </div>

                <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="image">
                <img src="image/blog-2.jpg" alt="">
                </div>

                <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
                </div>
            </div>

            <div class="swiper-slide box">
                <div class="image">
                <img src="image/blog-3.jpg" alt="">
                </div>

                <div class="content">
                <h3>blog title goes here</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
                <a href="#" class="btn">read more</a>
                </div>
            </div>

            <div class="swiper-slide box">
            <div class="image">
            <img src="image/blog-4.jpg" alt="">
            </div>

            <div class="content">
            <h3>blog title goes here</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, odio.</p>
            <a href="#" class="btn">read more</a>
            </div>
        </div>
                `;
    },

    // product by category
    async listProductByCategory() {
        const { data } = await getAllProduct();
        // console.log(data);
        return /* html */ `
                    ${data
        .map(
            (item) => `
                            <div class="swiper-slide box "  >
                                <div class="icons">
                                    <a href="" class="fas fa-shopping-cart"></a>
                                    <a href="" class="fas fa-heart"></a>
                                    <a href="/detail_product/${item.id}" class="fas fa-eye"></a>
                                    </div>    

                                    <div class="image product" data-name="p-${item.id}">
                                        <img src="../${item.img}" alt="" >
                                    </div>

                                    <div class="content">
                                    <h3>${item.title}</h3>
                                    <div class="price">${item.price_now} <span>${item.price_old}</span></div>
                                    <a href="#" class="btn">add to cart</a>
                                </div>

                            </div>

                        
                    `,
        )
        .join("")}
            
            
            
            
                `;
    },

    // product by category
    async listProductByCategory2() {
        const { data } = await getAllProduct();
        // console.log(data);
        return /* html */ `
                    ${data
        .map(
            (item) => `

                            <div class="preview" data-target="p-${item.id}">
                                <i class="fas fa-times"></i>
                                <img src="../${item.img}" alt="">
                                <h3>${item.title}</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <span>( 250 )</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                                <div class="price">${item.price_now}</div>
                                <div class="buttons">
                                    <a href="#" class="buy">buy now</a>
                                    <a href="#" class="cart">add to cart</a>
                                </div>
                            </div>
                
              
                    `,
        )
        .join("")}
            
            
            
            
                `;
    },
};

export default ListProduct;