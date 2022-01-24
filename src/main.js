import Navigo from "navigo";
import AboutPage from "./pages/aboutPage";
import DashBoardPage from "./pages/admin/dashboard";
import ProductPage from "./pages/admin/products";
import HomePage from "./pages/home";
import SignIn from "./pages/sign_in";
import SignUp from "./pages/sign_up";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.getElementById("app").innerHTML = await content.render(id);
    if (content.afterRender) await content.afterRender();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/sign_in": () => print(SignIn),
    "/sign_up": () => print(SignUp),
    "/admin": () => print(DashBoardPage),
    "/admin/products": () => print(ProductPage),
});
router.resolve();