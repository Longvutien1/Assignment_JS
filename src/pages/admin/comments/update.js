import { getOrderById, updateOrder } from "../../../api/order";
import ListProduct from "../../../component/listProduct";
import NavAdmin from "../../../component/NavAdmin";
import { reRender } from "../../../utils";
import adminListOrder from "./list";

const adminUpdateOrder = {
    async render(id) {
    // console.log(id);
        const { data } = await getOrderById(id);

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

                      <!-- thong tin  order -->
                      <h2 class="text-center p-3 mb-2 text-xl">????n h??ng: ${data.id}</h2>
                      <form action="" method="POST">
                          <div class="grid grid-cols-12 gap-8 ">
                              <div class="col-span-7 p-8 don_hang2">
                                  <p class="text-3xl font-bold">Th??ng tin giao h??ng</p>
                                  <div>
                      
                      
                      
                      
                                      <div class="flex justify-between py-2 mt-4" style="border-bottom: 1px solid #ddd;">
                                          <p>H??? t??n ng?????i mua h??ng: </p>
                                          <p>${data.userInformation.fullname}</p>
                      
                                      </div>
                      
                                      <div class="flex justify-between py-2" style="border-bottom: 1px solid #ddd;">
                                          <p>S??? ??i???n tho???i: </p>
                                          <p>${data.userInformation.phone}</p>
                      
                      
                                      </div>
                      
                                      <div class="flex justify-between py-2" style="border-bottom: 1px solid #ddd;">
                                          <p>?????a ch???: </p>
                                          <p>${data.userInformation.address}</p>
                                      </div>
                      
                                      <div class="flex justify-between py-2" style="border-bottom: 1px solid #ddd;">
                                          <p>?????a ch??? c??? th???: </p>
                                          <p>${data.userInformation.specificAddress}</p>
                                      </div>
                      
                                      <div class="flex justify-between py-2" style="border-bottom: 1px solid #ddd;">
                                          <p>Lo???i ?????a ch???: </p>
                                          <p>${data.userInformation.noiNhan === "Home" ? "Nh?? ri??ng" : "V??n ph??ng"}</p>
                                      </div>
                      
                                     
                      
                                      <div class="flex justify-between py-2" style="border-bottom: 1px solid #ddd;">
                                          <p>Ng??y mua: </p>
                                          <p><?= $ngay_mua ?></p>
                                      </div>
                      
                                      <div>
                                          <div class="float-right py-4 ">
                                              <select name="confirmOrder" id="confirmOrder" class="mr-4 h-9 my-auto" style="border: 1px solid #000;">
                                                  <option value="1">Duy???t</option>
                                                  <option value="2">Giao h??ng</option>
                                                  <option value="3">Giao h??ng th??nh c??ng</option>
                                                  <option value="4">H???y ????n</option>
                                              </select>
                                              <button type="submit" class="btn_thanh_toan2" name="cap_nhat">C???p nh???t</button>
                                          </div>
                                      </div>
                                  </div>
                      
                              </div>
                              <div class="col-span-5 p-8 don_hang2">
                                  <p class="text-3xl font-bold">????n H??ng</p>
                                  <div>
                                      <div class="flex justify-between py-2 mt-4">
                                        
                                          <p>S???n ph???m </p>
                                          <p>Gi?? ti???n</p>
                      
                                      </div>
                                      ${await ListProduct.listProductInOrderEdit(id)}
                      
                      
                          
                                      <div class="flex justify-between py-2" style="border-bottom: 1px solid #ddd;">
                                          <p>Ph?? v???n chuy???n</p>
                                          <p>$${data.userInformation.noiNhan === "Home" ? "1" : "2"}</p>
                      
                                      </div>
                                      <div class="flex justify-between py-2 font-bold" style="border-bottom: 1px solid #ddd;">
                                          <p>T???ng</p>
                                          <p id="tongDonHang"></p>
                      
                                      </div>
                                      <div class="flex justify-between py-2">
                                          <p class="font-bold">Tr??? ti???n m???t khi nh???n h??ng</p>

                                      </div>
                      
                                  </div>
                      
                              </div>
                          </div>
                      </form>
         
                     
                

                </section>
            
      

        `;
    },

    async afterRender(id) {
        // console.log(id);

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

        // t???ng ti???n
        const { data } = await getOrderById(id);
        console.log(data);
        let sumMonney = 0;
        data.product.listProduct.forEach((e) => {
            // console.log(e);
            // console.log(e.quantity);
            sumMonney += (Number(e.price) * Number(e.quantity));
        });
        // console.log(sumMonney);
        const phiShip = data.userInformation.noiNhan === "Home" ? 1 : 2;
        document.querySelector("#tongDonHang").innerHTML = `$ ${sumMonney + phiShip}`;

        // const { data } = await getProductById(id);
        console.log(data.product.listProduct);
        const btnThanhToan2 = document.querySelector(".btn_thanh_toan2");
        btnThanhToan2.addEventListener("click", (e) => {
            e.preventDefault();
            // console.log(document.querySelector("#confirmOrder").value);

            // call api th??m bai vi???t
            updateOrder({
                id,
                userInformation: {
                    fullname: data.userInformation.fullname,
                    phone: data.userInformation.phone,
                    address: data.userInformation.address,
                    noiNhan: data.userInformation.noiNhan,
                    specificAddress: data.userInformation.specificAddress,
                    status: document.querySelector("#confirmOrder").value,
                },
                product: {

                    listProduct: data.product.listProduct,

                },
            }).then(() => {
                alert("Update Successfully");
                reRender(adminListOrder, "#app");
            });
        });
    },
};

export default adminUpdateOrder;