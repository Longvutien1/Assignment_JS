// import NavAdmin from "../../component/NavAdmin";

const DashBoardPage = {
    render() {
        return /* html */ `
        
                    <div class="w3-sidebar w3-bar-block w3-card w3-animate-left text-white"  style="display:none; background:#27AE60" id="mySidebar">
                      <button class="w3-bar-item w3-button w3-large " style="border-bottom: 1px solid #F4F6F9" id="close">Close &times;</button>
                      <div class="px-4 py-3 flex justify-start" style="border-bottom: 1px solid #F4F6F9">
                        <img src="image/pic-2.png" alt="" width="40" style="border-radius:100%">
                        <span class="my-auto pl-2">Vũ Tiến Long</span>
                      </div>

                      <ul id="menu_sidebar">
                        <li> 
                          <a  class="w3-bar-item w3-button" id="link_menu" data-name="p-1">Link 1 </a>
                          <ul id="menu2" data-target="p-1">
                            <li><a href="" class="w3-bar-item w3-button">menu2</a></li>
                            <li><a href="" class="w3-bar-item w3-button">menu2</a></li>
                            <li><a href="" class="w3-bar-item w3-button">menu2</a></li>
                          </ul>
                      
                        </li>
                        <li><a href="" class="w3-bar-item w3-button">Link 2</a></li>
                        <li><a href="" class="w3-bar-item w3-button">Link 3</a></li>
                      </ul>
                     
                      
                      
                    </div>

                    <div id="main">

                    <div >
                   
                      <div class="w3-container">
                     
                        <div class="flex   " style="border-bottom:1px solid #ccc">
                            <button id="openNav" class="w3-button  w3-xlarge" >&#9776;</button>
                            <ul class="my-auto py-4">
                              <li class ="inline-block px-4"><a href="/">Home</a></li>
                              <li class ="inline-block px-4"><a href="">Contact</a></li>
                            </ul>
                        </div>

                        <div class="dashboard py-4 px-3 pb-8" style="background-color: #F4F6F9;">
                            <h1 class=" text-4xl my-4">Dashboard</h1>
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
                          <!-- end cột 1  -->

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
                          <!-- end cột 2  -->

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
                          <!-- end cột 3  -->


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
                          <!-- end cột 4  -->

                          </div>

                          <div class="table w-full">
                            
                              <table class="w-full text-center" style="border:1px solid #3f3f3f">
                                <thead style="border:1px solid #3f3f3f">
                                    <tr >
                                      <th>STT</th>
                                      <th>Image</th>
                                      <th>Product Name</th>
                                      <th>Price</th>
                                      <th>Quantity</th>
                                      <th colspan="2">Action</th>
                                    </tr>
                                </thead>
                                  <tbody>
                                      <tr>
                                        <td>1</td>
                                        <td><img src="image/book-1.png" alt="" width="120"></td>
                                        <td>Sản phẩm a</td>
                                        <td>1</td>
                                        <td>23</td>
                                        <td>
                                            <a href="">Sửa</a>
                                            <a href="">Xóa</a>
                                        </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </div>

                      </div>
                    </div>
 
                        </div>

                        
                   

                    <div class="w3-container">
                       </div>

                    </div>

                   
    
                    `;
    },
    afterRender() {
        const open = document.querySelector("#openNav");
        open.addEventListener("click", () => {
            document.getElementById("main").style.marginLeft = "20%";
            document.getElementById("mySidebar").style.width = "20%";
            document.getElementById("mySidebar").style.display = "block";
            document.getElementById("openNav").style.display = "none";
        });

        const close = document.querySelector("#close");
        close.addEventListener("click", () => {
            document.getElementById("main").style.marginLeft = "0%";
            document.getElementById("mySidebar").style.display = "none";
            document.getElementById("openNav").style.display = "inline-block";
        });

        // menu2

        const menu_sidebar = document.querySelector("#menu_sidebar");
        const menu2 = document.querySelectorAll("#menu2");
        document.querySelectorAll("#link_menu").forEach((menu) => {
            // eslint-disable-next-line no-param-reassign
            menu.onclick = () => {
                const name2 = menu.getAttribute("data-name");
                menu2.forEach((preview) => {
                    const target = preview.getAttribute("data-target");
                    if (name2 === target) {
                        preview.classList.add("active");
                        // eslint-disable-next-line no-param-reassign
                        menu2.style.transition = "all 2s linear;";
                    }
                });
            };
        });

        document.querySelectorAll("#link_menu").forEach((menu) => {
            // eslint-disable-next-line no-param-reassign
            menu.onscroll = () => {
                const name2 = menu.getAttribute("data-name");
                menu2.forEach((preview) => {
                    const target = preview.getAttribute("data-target");
                    if (name2 === target) {
                        preview.classList.remove("active");
                    }
                });
            };
        });
    },
};

export default DashBoardPage;