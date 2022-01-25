const Header = {
    render() {
        return /* html */ `

        <header class="header">

            <div class="header-1">

            <a href="" class="logo" ><i class="fas fa-book"></i> myBook</a>

            <form action="" class="search-form">
                <input type="search" placeholder="Search here..." id="search-box">
                <label for="search-box" class="fas fa-search"></label>
            </form>

            <div class="icons">
                <div id="search-btn" class="fas fa-search"></div>
                <a href="" class="fas fa-heart"></a>
                <a href="" class="fas fa-shopping-cart"></a>
                <div id="login-btn" class="fas fa-user"></div>
            </div>

            </div>
            <div class="header-2">
                <nav class="navbar">
                    <a href="/">Home page</a>
                    <a href="/about">featured</a>
                    <a href="/sign_in">arrivals</a>
                    <a href="/sign_in">reviews</a>
                    <a href="/sign_in">blogs</a>
                    <a href="/sign_in">Sign In</a>
                    <a href="/sign_up">Sign Up</a>
                    <a href="/admin">admin</a>
                </nav>
            </div>
        </header>

        <!-- header section ends -->

        <!-- bottom navbar  -->

        <nav class="bottom-navbar">
            <a href="#home" class="fas fa-home"></a>
            <a href="#featured" class="fas fa-list"></a>
            <a href="#arrivals" class="fas fa-tags"></a>
            <a href="#reviews" class="fas fa-comments"></a>
            <a href="#blogs" class="fas fa-blog"></a>
        </nav>
        

         <!-- login form -->
        <div class="login-form-container">

            <div id="close-login-btn" class="fas fa-times"></div>

            <form action="">
                <h3>Sign In</h3>
                <span>User Name</span>
                <input type="email" name="" id="" class="box" placeholder="Enter your email">
                <span>Password</span>
                <input type="password" name="" id="" class="box" placeholder="Enter your password">

                <div class="checkbox">
                    <input type="checkbox" name="" id="remember-me">
                    <label for="remember-me">Remember me</label>
                </div>

                <input type="submit" value="Sign In" class="btn">
                <p>Forget password ? <a href="">Click here</a></p>
                <p>Don't have an account ? <a href="#">Create one</a></p>
            </form>

        </div>
        `;
    },

};

export default Header;