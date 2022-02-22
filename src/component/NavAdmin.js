const NavAdmin = {
    render() {
        return /* html */`
        <nav class="sidebar close" >
        <header>
            <div class="image-text">
                <span class="image">
                    <a href="" class="logo" ><i class="fas fa-book text-3xl" style="color:#27AE60"></i> </a>
                </span>

                <div class="text logo-text">

                    <span class="profession ">myBook</span>
                </div>
            </div>

            <i class='bx bx-chevron-right toggle'></i>
        </header>

        <div class="menu-bar">
                  <div class="menu">

                      <li class="search-box">
                          <i class='bx bx-search icon'></i>
                          <input type="text" placeholder="Search...">
                      </li>

                      <ul class="menu-links">
                      <li class="nav-link">
                      <a href="/">
                      <i class='bx bx-home-alt icon'></i>
                          <span class="text nav-text">Home</span>
                        
                      </a>
                  </li>

                  <li class="nav-link">
                        <a  id="menu-category">
                            <i class='bx bx-category icon'></i>
                            <span class="text nav-text">Category</span>
                            <i class='bx bx-chevron-down icon icon2'></i>
                        </a>

                        <ul  id="menu2-category" >
                            <li  class="nav-link">
                                <a href="/#/admin/categories/add">
                                <i class='bx bx-category icon'></i>
                                <span class=" nav-text">Add Category</span>
                                </a>
                            </li>

                            <li  class="nav-link">
                                <a href="/admin/categories/list">
                                <i class='bx bx-category icon'></i>
                                <span class=" nav-text">List Category</span>
                                </a>
                            </li>
                        </ul>

                    </li>
                  <li class="nav-link">
                      <a  id="menu-product">
                          <i class='bx bxl-product-hunt icon'></i>
                          <span class="text nav-text">Product</span>
                          <i class='bx bx-chevron-down icon icon2 '></i>
                      </a>
                      
                      <ul  id="menu2-product" >
                          <li  class="nav-link">
                              <a href="/#/admin/products/add">
                              <i class='bx bxs-plus-circle icon'></i>
                              <span class=" nav-text">Add Product</span>
                              </a>
                          </li>

                          <li  class="nav-link">
                              <a href="/#/admin/products/list">
                              <i class='bx bxl-paypal icon'></i>
                              <span class=" nav-text">List Product</span>
                              </a>
                          </li>
                        </ul>
                  </li>

                    <li class="nav-link">
                        <a  id="menu-user">
                            <i class='bx bx-user icon'></i>
                            <span class="text nav-text">User</span>
                            <i class='bx bx-chevron-down icon icon2'></i>
                        </a>

                        <ul  id="menu2-user" >
                            <li  class="nav-link">
                                <a href="/#/admin/users/add">
                                <i class='bx bx-user-plus icon'></i>
                                <span class=" nav-text">Add User</span>
                                </a>
                            </li>

                            <li  class="nav-link">
                                <a href="/admin/users/list">
                                <i class='bx bxs-user-detail icon' ></i>
                                <span class=" nav-text">List User</span>
                                </a>
                            </li>
                        </ul>

                    </li>
                    <li class="nav-link">
                        <a  id="menu-order">
                            <i class='bx bxl-product-hunt icon'></i>
                            <span class="text nav-text">Orders</span>
                            <i class='bx bx-chevron-down icon icon2 '></i>
                        </a>
                        
                        <ul  id="menu2-order" >
                        
                            <li  class="nav-link">
                                <a href="/#/admin/orders/list">
                                <i class='bx bxl-paypal icon'></i>
                                <span class=" nav-text">List Orders</span>
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-link">
                        <a  id="menu-comment">
                        <i class='bx bx-heart icon'></i>
                            <span class="text nav-text">Comments</span>
                            <i class='bx bx-chevron-down icon icon2 '></i>
                        </a>
                        
                        <ul  id="menu2-comment" >
                        
                            <li  class="nav-link">
                                <a href="/#/admin/comments/list">
                                <i class='bx bx-heart icon'></i>
                                <span class=" nav-text">List Comments</span>
                                </a>
                            </li>
                        </ul>
                    </li>
              

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">Notifications</span>
                        </a>
                    </li>

                   

                    
        
                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <a href="#">
                        <i class='bx bx-log-out icon'></i>
                        <span class="text nav-text">Logout</span>
                    </a>
                </li>

                <li class="mode">
                  <div class="sun-moon">
                      <i class='bx bx-moon icon moon'></i>
                      <i class='bx bx-sun icon sun'></i>
                  </div>
                  <span class="mode-text text">Dark mode</span>

                  <div class="toggle-switch">
                      <span class="switch"></span>
                  </div>
              </li>

            </div>
        </div>

    </nav>
     

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

        const menu2Order = document.querySelector("#menu2-order");
        document.querySelector("#menu-order").addEventListener("click", () => {
            menu2Order.classList.toggle("active");
        });

        const menu2Comment = document.querySelector("#menu2-comment");
        document.querySelector("#menu-comment").addEventListener("click", () => {
            menu2Comment.classList.toggle("active");
        });
    },
};
export default NavAdmin;