import Footer from "../component/footer";
import Header from "../component/header";

const HomePage = {
    render() {
        return /* html */ `
        ${Header.render()}
            <p>Home page</p>
        ${Footer.render()}
        `;
    },
};

export default HomePage;