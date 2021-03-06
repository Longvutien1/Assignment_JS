import toastr from "toastr";
import { getAllProduct } from "../../../api/products";
import { removeUser } from "../../../api/users";
import ListProduct from "../../../component/listProduct";
import NavAdmin from "../../../component/NavAdmin";
import { reRender } from "../../../utils";

import "toastr/build/toastr.min.css";

const adminListUser = {
    async render() {
        const { data } = await getAllProduct();
        console.log(data);
        return /* html */ `


        ${NavAdmin.render()}

  <section class="home-admin">
       <div class="dashboard py-4 px-4 pb-8" style="background-color: #fff;  border-radius: 10px;">
           <h1 class=" text-4xl my-4">List Product</h1>
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

         <div class="flex flex-col mt-4">
         <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
             <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
             <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                 <table class="min-w-full divide-y divide-gray-200">
                 <thead class="bg-gray-50">
                 <tr>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     STT
                 </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     IMAGE
                 </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     EMAIL
                 </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     FULL NAME
                 </th>
                 <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     PHONE
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     ADDRESS
                </th>
                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ROLE
                </th>
                 <th colspan="2" scope="col" class="text-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                     Status
                 </th>
                 <th scope="col" class="relative px-6 py-3">
                     <span class="sr-only">Edit</span>
                 </th>
                 </tr>
             </thead>
 
                     ${await ListProduct.listUserAdmin()}
                     
        
                 </table>
             </div>
             </div>
         </div>

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

        const menu2Category = document.querySelector("#menu2-category");
        document.querySelector("#menu-category").addEventListener("click", () => {
            menu2Category.classList.toggle("active");
        });

        const menu2Order = document.querySelector("#menu2-order");
        document.querySelector("#menu-order").addEventListener("click", () => {
            menu2Order.classList.toggle("active");
        });
        const menu2Comment = document.querySelector("#menu2-comment");
        document.querySelector("#menu-comment").addEventListener("click", () => {
            menu2Comment.classList.toggle("active");
        });

        // remove product
        const buttons = document.querySelectorAll(".btn");

        buttons.forEach((btn) => {
            // eslint-disable-next-line no-shadow
            const { id } = btn.dataset;
            // console.log(id);
            btn.addEventListener("click", () => {
                // eslint-disable-next-line no-alert
                const confirm = window.confirm("B???n c?? mu???n x??a b??i vi???t n??y kh??ng ?");
                if (confirm) {
                    console.log(id);
                    removeUser(id).then(() => {
                        // alert("Delete Success");
                        toastr.success("????ng k?? th??nh c??ng, chuy???n trang sau 2s");
                        reRender(adminListUser, "#app");
                    });
                }
            });
        });
    },
};

export default adminListUser;