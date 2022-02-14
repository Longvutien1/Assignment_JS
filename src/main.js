import Navigo from "navigo";
import AboutPage from "./pages/aboutPage";
import DashBoardPage from "./pages/admin/dashboard";
import ProductPage from "./pages/admin/products";
import adminNewAdd from "./pages/admin/products/add";
import adminUpdate from "./pages/admin/products/update";
import Cart from "./pages/cart";
import DetailProduct from "./pages/detailProduct";
import HomePage from "./pages/home";
import SignIn from "./pages/sign_in";
import SignUp from "./pages/sign_up";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender(id);
};

router.on("/admin/*/", () => {}, {
    before(done) {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).user.id;
            console.log(userId);
            if (userId === 1) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/cart": () => print(Cart),
    "/sign_in": () => print(SignIn),
    "/sign_up": () => print(SignUp),
    "/detail_product/:id": ({ data }) => {
        print(DetailProduct, data.id);
    },
    "/admin": () => print(DashBoardPage),
    "/admin/products": () => print(ProductPage),
    "admin/products/add": () => print(adminNewAdd),
    "admin/products/edit/:id": ({ data }) => {
        print(adminUpdate, data.id);
    },
});
router.resolve();