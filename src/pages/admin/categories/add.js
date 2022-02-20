import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { addCategories } from "../../../api/categories";
import NavAdmin from "../../../component/NavAdmin";
import { reRender } from "../../../utils";

const adminAddCategories = {
    async render() {
        return /* html */`


          ${NavAdmin.render()}

      <section class="home-admin">
            <div class="dashboard py-4 px-4 pb-8" style="background-color: #fff;  border-radius: 10px;">
                <h1 class=" text-4xl my-4">Add categories</h1>
              <div class="grid grid-cols-4 gap-4 mb-8">
                
                <div class="cot1 text-white">
                  <div class="small-box bg-info bg-cyan-500 ">
                    <div class="flex p-4 justify-between">
                        <div class="inner">
                          <h3 class="text-3xl font-bold  py-3">150</h3>
                          <p>New Orders</p>
                        </div>
                      <div class="icon my-auto" style="color: rgba(0,0,0,.2);   z-index: 0;">
                          <i class="fas fa-lock text-6xl p-2"></i>
                      </div>
                    </div>

                  <div class="text-center w-full">
                  <p class="bg-cyan-600 py-1"> <a href="#" class="small-box-footer ">More info <i class="fas fa-arrow-circle-right"></i></a></p>
                  </div>
                  </div>
                  
              </div>
            
                <div class="cot1 text-white">
                  <div class="small-box bg-info bg-cyan-500 ">
                    <div class="flex p-4 justify-between">
                        <div class="inner">
                          <h3 class="text-3xl font-bold  py-3">150</h3>
                          <p>New Orders</p>
                        </div>
                      <div class="icon my-auto" style="color: rgba(0,0,0,.2);   z-index: 0;">
                          <i class="fas fa-lock text-6xl p-2"></i>
                      </div>
                    </div>

                  <div class="text-center w-full">
                  <p class="bg-cyan-600 py-1"> <a href="#" class="small-box-footer ">More info <i class="fas fa-arrow-circle-right"></i></a></p>
                  </div>
                  </div>
                  
              </div>
          
              <div class="cot1 text-white">
                  <div class="small-box bg-info bg-cyan-500 ">
                    <div class="flex p-4 justify-between">
                        <div class="inner">
                          <h3 class="text-3xl font-bold  py-3">150</h3>
                          <p>New Orders</p>
                        </div>
                      <div class="icon my-auto" style="color: rgba(0,0,0,.2);   z-index: 0;">
                          <i class="fas fa-lock text-6xl p-2"></i>
                      </div>
                    </div>

                  <div class="text-center w-full">
                  <p class="bg-cyan-600 py-1"> <a href="#" class="small-box-footer ">More info <i class="fas fa-arrow-circle-right"></i></a></p>
                  </div>
                  </div>
                  
              </div>
            


              <div class="cot1 text-white">
                  <div class="small-box bg-info bg-cyan-500 ">
                    <div class="flex p-4 justify-between">
                        <div class="inner">
                          <h3 class="text-3xl font-bold  py-3">150</h3>
                          <p>New Orders</p>
                        </div>
                      <div class="icon my-auto" style="color: rgba(0,0,0,.2);   z-index: 0;">
                          <i class="fas fa-lock text-6xl p-2"></i>
                      </div>
                    </div>

                  <div class="text-center w-full">
                  <p class="bg-cyan-600 py-1"> <a href="#" class="small-box-footer ">More info <i class="fas fa-arrow-circle-right"></i></a></p>
                  </div>
                  </div>
                  
              </div>
            

              </div>
            <!-- end -->

              <div class="mt-5 md:mt-0 md:col-span-2">
                <form id="form-add-post">
                      <div class="shadow sm:rounded-md sm:overflow-hidden">
                      <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                       

                        <div>
                              <label for="about" class="block text-sm font-medium text-gray-700"  >
                                  Category Name
                              </label>
                              <input type="text" name="company-website" id="name-categories" class="shadow-sm border-solid px-2 py-1 w-full mt-1 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Product Name">
                
                          </div>
                       
                      </div>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 ">
                          Save
                        </button>
                      </div>
                    </div>

                </div>
              </form>
          
          </section>

      </section>
       

       
      
     
        `;
    },

    afterRender() {
        // menu2
        const body = document.querySelector("body");
        const sidebar = body.querySelector("nav");
        const toggle = body.querySelector(".toggle");
        const searchBtn = body.querySelector(".search-box");
        const modeSwitch = body.querySelector(".toggle-switch");
        const modeText = body.querySelector(".mode-text");

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        });

        searchBtn.addEventListener("click", () => {
            sidebar.classList.remove("close");
        });

        modeSwitch.addEventListener("click", () => {
            body.classList.toggle("dark");

            if (body.classList.contains("dark")) {
                modeText.innerText = "Light mode";
            } else {
                modeText.innerText = "Dark mode";
            }
        });

        const menu2Product = document.querySelector("#menu2-product");
        document.querySelector("#menu-product").addEventListener("click", () => {
            menu2Product.classList.toggle("active");
        });

        const menu2User = document.querySelector("#menu2-user");
        document.querySelector("#menu-user").addEventListener("click", () => {
            menu2User.classList.toggle("active");
        });

        // console.log("add product");
        const formAdd = document.querySelector("#form-add-post");

        formAdd.addEventListener("submit", (a) => {
            a.preventDefault();

            const nameCategories = document.querySelector("#name-categories");

            if (nameCategories.value === "") {
                nameCategories.focus();
            } else {
                addCategories({
                    nameCategories: nameCategories.value,
                }).then(() => {
                    toastr.success("Add Successfully");
                    // alert("Add Successfully");
                    reRender(adminAddCategories, "#app");
                });
            }
        });
    },

};

export default adminAddCategories;