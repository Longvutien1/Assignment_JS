import toastr from "toastr";
import { signUp } from "../api/users";
import "toastr/build/toastr.min.css";

const SignUp = {
    render() {
        return /* html */ `
               
                 <!-- login form -->
         
                <div class="login-form-container">

                    <form action="" id="formSignUp">
                        <h3>Sign Up</h3>

                        <span>Full Name</span>
                        <input type="text" name="" id="fullname" class="box" placeholder="Enter your full name">
                        <span>User Name</span>
                        <input type="email" name="" id="username" class="box" placeholder="Enter your email">
                        <span>Password</span>
                        <input type="password" name="" id="password" class="box" placeholder="Enter your password">
                        <span>Forget Password</span>
                        <input type="password" name="" id="" class="box" placeholder="Enter your password again">

                       
                        <button  class="btn">Sign Up</button>
                        <p>Forget password ? <a href="">Click here</a></p>
                        <p>Go to Sign In ! <a href="/sign_in">Sign In</a></p>
                    </form>

                </div>
       
        `;
    },

    afterRender() {
        const formSignUp = document.querySelector("#formSignUp");
        formSignUp.addEventListener("submit", async (e) => {
            e.preventDefault();

            try {
                const { data } = await signUp({
                    username: document.querySelector("#fullname").value,
                    email: document.querySelector("#username").value,
                    password: document.querySelector("#password").value,
                });

                if (data) {
                    toastr.success("Đăng kí thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/sign_in";
                    }, 2000);
                }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};

export default SignUp;