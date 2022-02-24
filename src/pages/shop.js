import toastr from "toastr";
import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import Footer from "../component/footer";
import Header from "../component/header";
import ListProduct from "../component/listProduct";
import { addToCart } from "../utils/cart";
import "toastr/build/toastr.min.css";
import { getAllProduct, getProductById } from "../api/products";
import { reRender } from "../utils";

const Shop = {
    async render(idCategory) {
        return /* html */ `
        ${Header.render()}
        <section class="grid grid-cols-12 gap-8">
        <div class="left col-span-3">
          <div class="mb-8">
            <p class="text-3xl mb-2">Sreach</p>
            <div   class="w-full border border-solid flex justify-between">
              <input class="w-10/12 p-1 outline-none  normal-case" id="search" type="text" placeholder="Tìm kiếm" name="search">
              <button class="w-2/12  mx-auto btn_search" id="btn-search" type="submit" name="submitSearch"><i class="fas fa-search"></i></button>
            </div>
          </div>
    
          <ul>
            <li class="border text-white pl-4 text-xl py-2" style="background-color: #27ae60;color: #FFF;">CATEGORY</li>
    
            <div style="height: 250px; overflow: scroll;">
              ${await ListProduct.listCategoriesShop()}
    
    
            </div>
            <li class="border px-4  py-2" style="background-color: #27ae60;color: #000;">
              <form action="" method="GET">
                <input class="w-full p-1 outline-none" type="text" name="search_loai" placeholder="Từ khóa tìm kiếm">
              </form>
            </li>
          </ul>
    
          <ul>
            <li class="border text-white pl-4 text-xl py-2 mt-8" style="background-color: #27ae60;color: #fff;">FAVORITE PRODUCTS</li>
                
                ${await ListProduct.listProductTopViewShop()}
            <li class="border px-4  py-2" style="background-color: #27ae60;">
              <p class="p-3"></p>
            </li>
          </ul>
        </div>
        <div class="right col-span-9">
    
          <H4 class="italic text-3xl text-center text-red-200">Sản Phẩm Của Chúng Tôi</H4>
            <div class="page">
              <ul>
                  <li class="btn-prev btn-active fas fa-angle-left"></li>
                  <div class="number-page" id="number-page">
                 
                      <!-- <li class="active">
                        <a>1</a>
                      </li>
                      <li>
                          <a>2</a>
                      </li>
                      <li>
                          <a>3</a>
                      </li> -->
                  </div>
                  <li class="btn-next fas fa-angle-right"></li>
              </ul>
            </div>
          <div id="product" class="product-shop sm:grid sm:grid-cols-1 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 gap-8 mt-8 ">
                    ${idCategory ? await ListProduct.listProductByCategoryId(idCategory) : await ListProduct.listProductLimit(1)}
          </div>

          <!--end all sản phẩm  -->
          <!-- end danh sách sản phẩm -->
        
        </div>
      </section>
        ${Footer.render()}
        `;
    },

    async afterRender() {
        // add to cart
        const btnAddToCart = document.querySelectorAll("#btnAddToCart");

        btnAddToCart.forEach(async (e) => {
            // const { id } = btnAddToCart.dataset;
            const { id } = e.dataset;
            // console.log(id);

            await e.addEventListener("click", async () => {
                // console.log(1212);
                const { data } = await getProductById(id);
                // add sp vao cart quantity mặc định = 1
                // eslint-disable-next-line max-len
                addToCart({ ...data, quantity: 1 }, () => {
                    toastr.success("Thêm thành công 1 sản phẩm vào giỏ hàng");
                    reRender(Header, "header");
                });
            });
        });

        const btnSearch = document.querySelector("#btn-search");
        const search = document.querySelector("#search");
        const product = document.querySelector("#product");

        btnSearch.addEventListener("click", async (e) => {
            e.preventDefault();
            product.innerHTML = await ListProduct.listProductByName(search.value);
            // console.log(search.value);
        });

        // phân trang

        const { data } = await getAllProduct();
        const totalPages = Math.ceil(data.length / 3);
        // console.log(totalPages);
        let html = "";
        html += `<li class="current-page active"><a>${1}</a></li>`;
        // eslint-disable-next-line no-plusplus
        for (let i = 2; i <= totalPages; i++) {
            html += `<li><a>${i}</a></li>`;
        }
        if (totalPages === 0) {
            html = "";
        }
        document.getElementById("number-page").innerHTML = html;

        //
        const idPages = document.querySelectorAll(".number-page li");
        // const a = document.querySelectorAll(".number-page li a");
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < idPages.length; i++) {
            // eslint-disable-next-line no-loop-func
            idPages[i].onclick = async function () {
                const value = i + 1;
                const current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace("active", "");
                this.classList.add("active");
                if (value > 1 && value < idPages.length) {
                    $(".btn-prev").removeClass("btn-active");
                    $(".btn-next").removeClass("btn-active");
                }
                if (value === 1) {
                    $(".btn-prev").addClass("btn-active");
                    $(".btn-next").removeClass("btn-active");
                }
                if (value === idPages.length) {
                    $(".btn-next").addClass("btn-active");
                    $(".btn-prev").removeClass("btn-active");
                }
                if (value) {
                    const product2 = document.querySelector("#product");
                    product2.innerHTML = await ListProduct.listProductLimit(value);
                    console.log(value);
                }
            };
        }
        let idPage = 1;
        $(".btn-next").on("click", async () => {
            // eslint-disable-next-line no-plusplus
            idPage++;
            if (idPage > totalPages) {
                idPage = totalPages;
            }
            if (idPage === totalPages) {
                $(".btn-next").addClass("btn-active");
            } else {
                $(".btn-next").removeClass("btn-active");
            }

            const btnPrev = document.querySelector(".btn-prev");
            btnPrev.classList.remove("btn-active");
            $(".number-page li").removeClass("active");
            $(`.number-page li:eq(${idPage - 1})`).addClass("active");
            if (idPage) {
                const product2 = document.querySelector("#product");
                product2.innerHTML = await ListProduct.listProductLimit(idPage);
                console.log(idPage);
            }
        });

        $(".btn-prev").on("click", async () => {
            // eslint-disable-next-line no-plusplus
            idPage--;
            if (idPage <= 0) {
                idPage = 1;
            }
            if (idPage === 1) {
                $(".btn-prev").addClass("btn-active");
            } else {
                $(".btn-prev").removeClass("btn-active");
            }
            const btnNext = document.querySelector(".btn-next");
            btnNext.classList.remove("btn-active");
            $(".number-page li").removeClass("active");
            $(`.number-page li:eq(${idPage - 1})`).addClass("active");
            if (idPage) {
                const product2 = document.querySelector("#product");
                product2.innerHTML = await ListProduct.listProductLimit(idPage);
                console.log(idPage);
            }
        });
        console.log(idPage);

        // const abc = await list3product();
    },
};

export default Shop;