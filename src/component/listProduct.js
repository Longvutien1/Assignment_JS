import toastr from "toastr";
import { getAllCategories } from "../api/categories";
import {
    // eslint-disable-next-line max-len
    getAllProduct, getProductByCategoryId, getProductByName, list3product, list5product, sortProductByView,
} from "../api/products";
import { getAllUser } from "../api/users";
import "toastr/build/toastr.min.css";

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
                                    <h3>${item.productName}</h3>
                                    <div class="price">${item.price} <span>${item.price}</span></div>
                                    <a data-id="${item.id}" class="btn"  id="btnAddToCart" >add to cart</a>
                                    
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
                                <h3>${item.productName}</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <span>( 250 )</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                                <div class="price">${item.price}</div>
                                <div class="buttons">
                                    <a href="/#/detail_product/${item.id}" class="buy">buy now</a>
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
                                        <img src="${item.img}" alt="" >
                                    </div>

                                    <div class="content">
                                    <h3>${item.productName}</h3>
                                    <div class="price">${item.price} <span>${item.price}</span></div>
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
                                <img src="${item.img}" alt="">
                                <h3>${item.productName}</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                    <span>( 250 )</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, dolorem.</p>
                                <div class="price">${item.price}</div>
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

    async listProductAdmin(page) {
        const { data } = await list5product(page);
        console.log(data);
        return /* html */ `
            ${data
        .map(
            (item, index) => `
           
                    
                        <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                            <div class="text-sm text-gray-900">${index + 1}</div>
                        
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div><img src="${item.img}" alt="" width="120"></div>
                        </td>
                    
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${item.productName} </td>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${item.price}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${item.quantity}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="/admin/products/edit/${item.id}" class="text-yellow-500  hover:text-indigo-900"><i class="bx bxs-edit-alt text-3xl p-2"></i>   </a>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        
                            <button data-id="${item.id}" class="btn text-red-600"><i class="bx bxs-trash text-3xl p-2"></i> </button>
                        </td>
                        </tr>
        
                        <!-- More people... -->
                  
               
            `,
        )
        .join("")}
        `;
    },

    async listUserAdmin() {
        const { data } = await getAllUser();
        return /* html */ `
            ${data
        .map(
            (item, index) => `
           
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="flex items-center">
                            <div class="flex-shrink-0 h-10 w-10">
                            <div class="text-sm text-gray-900">${
    index + 1
}</div>
                        
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div><img src="${
    item.img
}" alt="" width="120"></div>
                        </td>
                    
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"> ${
    item.email
} </td>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${item.fullname}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${item.phone}
                         </td>
                         <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${item.address}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ${item.role}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="/#/admin/users/edit/${
    item.id
}" class="text-yellow-500  hover:text-indigo-900"><i class="bx bxs-edit-alt text-3xl p-2"></i>   </a>
                    

                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        
                            <button data-id="${
    item.id
}" class="btn text-red-600"><i class="bx bxs-trash text-3xl p-2"></i> </button>
                        </td>
                        </tr>
        
                        <!-- More people... -->
                    </tbody>
               
            `,
        )
        .join("")}
        `;
    },

    async listCategoriesAdmin() {
        const { data } = await getAllCategories();
        return /* html */ `
            ${data.map(
        (item, index) => `
            <tbody class="bg-white divide-y divide-gray-200">
            <tr>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                    <div class="text-sm text-gray-900">${index + 1}</div>
                
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.id}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${item.nameCategories}</td>
                <td class="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                    <a href="/#/admin/categories/edit/${item.id}" class="text-yellow-500  hover:text-indigo-900"><i class="bx bxs-edit-alt text-3xl p-2"></i> </a>
                    <button data-id="${item.id}" class="btn"><i class="bx bxs-trash text-3xl p-2 text-red-600"></i> </button>
                </td>
                
            </tr>

            <!-- More people... -->
            </tbody>
            `,
    ).join("")}
        `;
    },
    async listCategoriesShop() {
        const { data } = await getAllCategories();
        return /* html */ `
            ${data.map(
        (item) => `
                <a href="/#/shop/${item.id}" id="btn-category"><li class="xam border px-4  py-2" style="border: 1px solid #27ae60;">${item.nameCategories}</li></a>
            `,
    ).join("")}
        `;
    },

    async listProductTopViewShop() {
        const { data } = await sortProductByView();
        // eslint-disable-next-line prefer-const

        console.log(data);

        return /* html */ `
            ${data.map(
        (item) => `
                <li class="border px-4  py-2 flex gap-4" style="border: 1px solid #27ae60;">
                    <a href="/#/detail_product/${item.id}" ><img src="${item.img}" alt="" width="120"></a>

                    <div>
                    <a class="text-md" href="/#/detail_product/${item.id}">${item.productName}</a>
                    <p class="text-gray-400 text-md font-semibold line-through">$${item.price}</p>
                    <p class="text-yellow-500 text-md font-semibold">$${item.price}</p>
                    </div>
                </li>
            `,
    ).join("")}
        `;
    },

    async listProductByCategoryId(id) {
        const { data } = await getProductByCategoryId(id);
        // const { data } = await getAllProduct();
        console.log(data);

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
                        <h3>${item.productName}</h3>
                        <div class="price">${item.price} <span>${item.price}</span></div>
                        <a data-id="${item.id}" class="btn"  id="btnAddToCart" >add to cart</a>
                        
                    </div>

                </div>

            
        `,
        )
        .join("")}
    `;
    },

    async listProductByName(productName) {
        const { data } = await getProductByName(productName);
        if (data.length === 0) {
            toastr.error("Không tìm thấy sản phẩm nào !");
        } else {
            toastr.success(`Tìm thấy ${data.length} sản phẩm`);
        }
        console.log(data.length);
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
                        <h3>${item.productName}</h3>
                        <div class="price">${item.price} <span>${item.price}</span></div>
                        <a data-id="${item.id}" class="btn"  id="btnAddToCart" >add to cart</a>
                        
                    </div>

                </div>

            
        `,
        )
        .join("")}
    `;
    },

    async listProductLimit(page) {
        const { data } = await list3product(page);
        console.log(data);
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
                        <h3>${item.productName}</h3>
                        <div class="price">${item.price} <span>${item.price}</span></div>
                        <a data-id="${item.id}" class="btn"  id="btnAddToCart" >add to cart</a>
                        
                    </div>

                </div>

            
        `,
        )
        .join("")}
    `;
    },
};

export default ListProduct;