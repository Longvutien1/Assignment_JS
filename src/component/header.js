import toastr from "toastr";
import { reRender } from "../utils";
import "toastr/build/toastr.min.css";

const Header = {
    render() {
        return /* html */ `

        <header class="header" id="header">

            <div class="header-1">

            <a href="" class="logo" ><i class="fas fa-book"></i> myBook</a>

            <form action="" class="search-form">
                <input type="search" placeholder="Search here..." id="search-box">
                <label for="search-box" class="fas fa-search"></label>
            </form>

            <div class="icons">
                <div id="search-btn" class="fas fa-search"></div>
               
                <a href="/#/cart" class="fas fa-shopping-cart"> <span class="text-sm">${JSON.parse(localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")).length : ""}<span></a>
                <a href="/#/sign_in" class="fas fa-user"></a>
               
                <a id="logout" class="text-xl"><i class='bx bx-log-out-circle bx-rotate-180' ></i></a>
               
            </div>

            </div>
            <div class="header-2 ">
                <nav class="navbar2">
                    <a href="/#/">Home page</a>
                    <a href="/#/shop">Shop</a>
                    <a href="/#/">featured</a>
                    <a href="/#/">arrivals</a>
                    <a href="/#/">reviews</a>
                    <a href="/#/">blogs</a>
                    
                    <!-- <a href="/#/admin">admin</a>-->
                   
                    <!-- nếu đã đăng nhập = user admin thì hiện admin -->
                    ${JSON.parse(localStorage.getItem("user")) ? `
                
                    <a href="/#/admin" >admin</a>
                    <a href="/#/user/${JSON.parse(localStorage.getItem("user")).user.id}">User</a>
                    ` : ""}
                     <!-- nếu đã đăng nhập hoặc tồn tại user thì hiển thị tên -->
                    ${localStorage.getItem("user") ? `
                        <span id="accountInfo"> ${JSON.parse(localStorage.getItem("user")).user.username} </span>
                       
                    ` : ""}

                
                </nav>
               
                
            
            </div>
        </header>

        <!-- header section ends -->

        <!-- bottom navbar  -->

        <nav class="bottom-navbar2">
            <a href="#home" class="fas fa-home"></a>
            <a href="#featured" class="fas fa-list"></a>
            <a href="#arrivals" class="fas fa-tags"></a>
            <a href="#reviews" class="fas fa-comments"></a>
            <a href="#blogs" class="fas fa-blog"></a>
        </nav>
        

        
        `;
    },

    afterRender() {
        // lấy thông tin từ localstorage và hiển thị ra ngoài
        const logout = document.querySelector("#logout");
        const username = document.querySelector("#accountInfo");
        if (username) {
            username.innerHTML = JSON.parse(localStorage.getItem("user")).user.username;
            console.log(JSON.parse(localStorage.getItem("user")).user);
        }
        if (logout) {
            logout.addEventListener("click", () => {
                const confirm = window.confirm("You want to sign out ?");
                if (confirm) {
                    localStorage.removeItem("user");
                    reRender(Header, "#header");
                    toastr.success("Logout thành công");
                }
            });
        }
    },

};

export default Header;