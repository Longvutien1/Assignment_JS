import toastr from "toastr";
import { signIn } from "../api/users";
import "toastr/build/toastr.min.css";
import { getOrderByIdUser } from "../api/order";

const User = {
    async render(id) {
        console.log(id);
        const { data } = await getOrderByIdUser(id);
        console.log(data[0].userInformation.status);
        return /* html */`

               <!-- login form -->
              <div class="login-form-container" >

                    <form action="" id="formSignIn">
                      <h3>My User</h3>
                      <span>Thông báo</span>
                      <input type="email" name="" id="email" class="box" value="${data[0].userInformation.status === "1" ? "Đơn hàng của b đã được duyệt " : ""}" placeholder="">
                      <span>Password</span>
                      <input type="password" name="" id="password" class="box" placeholder="Enter your password">

                      <div class="checkbox">
                          <input type="checkbox" name="" id="remember-me">
                          <label for="remember-me">Remember me</label>
                      </div>

                      <input type="submit" value="Sign In" class="btn">
                      <p>Forget password ? <a href="">Click here</a></p>
                      <p>Don't have an account ? <a href="sign_up">Create one</a></p>
                    </form>

              </div>
     
      `;
    },

    afterRender() {
        const formSignIn = document.querySelector("#formSignIn");
        formSignIn.addEventListener("submit", async (e) => {
            e.preventDefault();
            try {
                const response = await signIn({
                    email: document.querySelector("#email").value,
                    password: document.querySelector("#password").value,
                });

                // console.log(response.data);
                // lưu thông tin user vào localStorage
                localStorage.setItem("user", JSON.stringify(response.data));

                if (response) {
                    toastr.success("Đăng nhập thành công, chuyển trang sau 2s");
                    setTimeout(() => {
                        document.location.href = "/";
                    }, 2000);
                }

                // if (response.data.user.id === 1) {
                // // nếu là admin thì chuyển trang
                //     document.location.href = "/admin";
                // } else {
                // // ngược lại là member  => chuyển về trang home
                //     document.location.href = "/";
                // }
            } catch (error) {
                toastr.error(error.response.data);
            }
        });
    },
};

export default User;