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
};

export default HomePage;