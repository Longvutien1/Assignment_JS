import Footer from "../component/footer";
import Header from "../component/header";

const AboutPage = {
    render() {
        return /* html */ `
        ${Header.render()}
            <p>About page mới</p>
            ${Footer.render()}
        `;
    },
};

export default AboutPage;