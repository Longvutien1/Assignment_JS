import Navigo from "navigo";
import Shop from "./pages/shop";

import DashBoardPage from "./pages/admin/dashboard";
import adminNewAdd from "./pages/admin/products/add";
import adminList from "./pages/admin/products/list";
import adminUpdate from "./pages/admin/products/update";
import addUser from "./pages/admin/users/add";
import adminListUser from "./pages/admin/users/list";
import adminUpdateUser from "./pages/admin/users/update";
import Cart from "./pages/cart";
import DetailProduct from "./pages/detailProduct";
import HomePage from "./pages/home";
import SignIn from "./pages/sign_in";
import SignUp from "./pages/sign_up";
import adminListCategories from "./pages/admin/categories/list";
import adminAddCategories from "./pages/admin/categories/add";
import adminUpdateCategories from "./pages/admin/categories/update";
import adminLisOrder from "./pages/admin/orders/list";
import adminUpdateOrder from "./pages/admin/orders/update";
import adminListComments from "./pages/admin/comments/list";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (component, id) => {
    document.getElementById("app").innerHTML = await component.render(id);
    if (component.afterRender) await component.afterRender(id);
};

router.on("/admin/*/", () => {}, {
    before(done) {
        if (localStorage.getItem("user")) {
            const userId = JSON.parse(localStorage.getItem("user")).user.id;
            console.log(userId);
            if (userId === 35) {
                done();
            } else {
                document.location.href = "/";
            }
        }
    },
});
router.on({
    "/": () => print(HomePage),
    "/cart": () => print(Cart),
    "/shop": () => print(Shop),
    "/sign_in": () => print(SignIn),
    "/sign_up": () => print(SignUp),
    "/detail_product/:id": ({ data }) => {
        print(DetailProduct, data.id);
    },
    "/shop/:id": ({ data }) => {
        print(Shop, data.id);
    },
    "/admin": () => print(DashBoardPage),
    "/admin/products/add": () => print(adminNewAdd),
    "/admin/products/list": () => print(adminList),
    "/admin/products/edit/:id": ({ data }) => {
        print(adminUpdate, data.id);
    },
    "/admin/users/list": () => print(adminListUser),
    "/admin/users/add": () => print(addUser),
    "/admin/users/edit/:id": ({ data }) => {
        print(adminUpdateUser, data.id);
    },
    "/admin/categories/list": () => print(adminListCategories),
    "/admin/categories/add": () => print(adminAddCategories),
    "/admin/categories/edit/:id": ({ data }) => {
        print(adminUpdateCategories, data.id);
    },
    "/admin/orders/list": () => print(adminLisOrder),
    "/admin/orders/edit/:id": ({ data }) => {
        print(adminUpdateOrder, data.id);
    },
    "/admin/comments/list": () => print(adminListComments),

});
router.resolve();