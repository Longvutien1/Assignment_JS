import axios from "axios";
import $ from "jquery";
// eslint-disable-next-line no-unused-vars
import validate from "jquery-validation";
import { getUserById, updateUser } from "../../../api/users";
import NavAdmin from "../../../component/NavAdmin";
import { reRender } from "../../../utils";
import adminListUser from "./list";

const adminUpdateUser = {
    async render(id) {
    // console.log(id);
        const { data } = await getUserById(id);

        console.log(data);
        return /* html */ `
      
        
                ${NavAdmin.render()}
            
                <section class="home-admin">
                      <div class="dashboard py-4 px-4 pb-8" style="background-color: #fff;  border-radius: 10px;">
                          <h1 class=" text-4xl my-4">Update</h1>
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

                       
         
                      <form id="form-edit">
                      <div class="shadow sm:rounded-md sm:overflow-hidden">
                        <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                         
                        <div >
                              <label for="about" class="block text-sm font-medium text-gray-700"  >
                                  FULL NAME
                              </label>
                              <input type="text" name="fullname" id="fullname" class="shadow-sm border-solid px-2 py-1 w-full mt-1 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Product Name" value="${data.fullname}">
                
                        </div>
                      
                        <div>
                          <label for="about" class="block text-sm font-medium text-gray-700" >
                              USER NAME
                          </label>
                          <input type="text" name="username" id="username" class="shadow-sm border-solid px-2 py-1 w-full mt-1 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="User name" value="${data.email}">
                        
                        </div>

                        <div >
                            <label for="about" class="block text-sm font-medium text-gray-700"  >
                                PASSWORD
                            </label>
                            <input type="password" name="password" id="password" class="shadow-sm border-solid px-2 py-1 w-full mt-1 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Password" value="${data.password}">
              
                        </div>

                        <div >
                            <label for="about" class="block text-sm font-medium text-gray-700"  >
                                PHONE
                            </label>
                            <input type="text" name="phone" id="phone" class="shadow-sm border-solid px-2 py-1 w-full mt-1 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Phone" value="${data.phone}">
              
                        </div>

                        <div >
                            <label for="about" class="block text-sm font-medium text-gray-700"  >
                                ADDRESS
                            </label>
                            <input type="text" name="address" id="address" class="shadow-sm border-solid px-2 py-1 w-full mt-1 border focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" placeholder="Address" value="${data.address}">
              
                        </div>

                          <div class="mt-1 flex gap-4">
                          <div class=" flex gap-1">
                            <input type="radio" name="role" id="role" class="my-auto " placeholder="Role"  value="Male" ${data.role === "Male" ? "checked = `checked`" : ""} >
                            <label for="company-website" class="block text-sm font-medium text-gray-700 ">
                              Male
                            </label>
                          
                          </div>

                          <div class=" flex gap-1">
                            <input type="radio" name="role" id="role" class="my-auto " placeholder="Role" value="Female" ${data.role === "Female" ? "checked = `checked`" : ""} >
                            <label for="Nữ" class="block text-sm font-medium text-gray-700 ">
                              Female
                            </label>
                          
                          </div>
                        </div>

                          <div>
                            <label class="block text-sm font-medium text-gray-700">
                              Photo
                            </label>
                            <div class="mt-1 flex items-center">
                              <span class="inline-block h-36 w-36 rounded-full overflow-hidden bg-gray-100">
                                <img id="img-preview" src="${data.img}" alt="">
                              </span>
                            
                            </div>
                          </div>
    
                          <div>
                            <label class="block text-sm font-medium text-gray-700">
                              Cover photo
                            </label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                              <div class="space-y-1 text-center">
                                <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <div class="flex text-sm text-gray-600">
                                  <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                  <span>Upload a file</span>
                                  <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                  </label>
                                  <p class="pl-1">or drag and drop</p>
                                </div>
                                <p class="text-xs text-gray-500">
                                  PNG, JPG, GIF up to 10MB
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                          <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                          </button>
                        </div>
                      </div>
                    </form>
                

                </section>
            
      

        `;
    },

    afterRender(id) {
        // console.log(id);
        const formEdit = $("#form-edit");
        const CLOUDINARY_PRESET = "longchanhthon";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/chanh-thon/image/upload";
        const imgPreview = document.querySelector("#img-preview");
        const imgPost = document.querySelector("#file-upload");
        // eslint-disable-next-line no-unused-vars
        let imgLink = "";

        imgPost.addEventListener("change", (e) => {
            // handle sự kiện change để xem ảnh trên local
            imgPreview.src = URL.createObjectURL(e.target.files[0]);
        });

        formEdit.validate({
            rules: {
                fullname: {
                    required: true,
                    minlength: 6,
                },
                username: {
                    required: true,
                    minlength: 6,
                },
                password: {
                    required: true,
                    minlength: 6,
                },

                address: {
                    required: true,
                    minlength: 6,
                },
                phone: {
                    required: true,
                    minlength: 10,
                },
                role: {
                    required: "#role:checked",
                    minlength: 1,
                },

            },
            messages: {
                fullname: {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 6 characters ",
                },
                username: {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 6 characters ",
                },
                password: {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 6 characters ",
                },
                address: {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 6 characters ",
                },
                phone: {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 6 characters ",
                },
                role: {
                    required: "This Field Is Required. ",
                    minlength: "At least more than 6 characters ",
                },

            },
            submitHandler: () => {
                async function handleAddpost() {
                    const file = imgPost.files[0];
                    if (file) {
                        const formData = new FormData();
                        formData.append("file", file);
                        formData.append("upload_preset", CLOUDINARY_PRESET);
                        // call api cloudinary để up ảnh lên
                        const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
                            headers: {
                                "Content-Type": "application/form-data",
                            },
                        });
                        imgLink = data.url;
                    }
                    let role = document.querySelectorAll("#role");
                    // let aanb;
                    // console.log(role.value);

                    role.forEach((e) => {
                        if (e.checked === true) {
                            role = e.value;
                        }
                    });

                    console.log(role);
                    // console.log(roleOld.data.role);
                    // const a = role || roleOld;
                    // call api thêm bai viết
                    updateUser({
                        id,
                        fullname: document.querySelector("#fullname").value,

                        img: imgLink || imgPreview.src,
                        email: document.querySelector("#username").value,
                        password: document.querySelector("#password").value,
                        phone: document.querySelector("#phone").value,
                        address: document.querySelector("#address").value,
                        role,

                    }).then(() => {
                        alert("Update Successfully");
                        reRender(adminListUser, "#app");
                    });
                }
                handleAddpost();
            },
        });

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
    },
};

export default adminUpdateUser;