import Footer from "../component/footer";
import Header from "../component/header";
import ListProduct from "../component/listProduct";

const HomePage = {
    async render() {
        return /* html */ `
        ${Header.render()}
            <div class="banner ">
                <a href=""><img src="https://picsum.photos/2000/400" alt=""></a>
                <div class="row mt-8">${await ListProduct.render()}</div>
            </div>
        ${Footer.render()}
        `;
    },

    afterRender() {
        const searchForm = document.querySelector(".search-form");

        document.querySelector("#search-btn").onclick = () => {
            searchForm.classList.toggle("active");
        };

        const loginForm = document.querySelector(".login-form-container");

        document.querySelector("#login-btn").onclick = () => {
            loginForm.classList.toggle("active");
        };

        document.querySelector("#close-login-btn").onclick = () => {
            loginForm.classList.remove("active");
        };
    },
};

export default HomePage;