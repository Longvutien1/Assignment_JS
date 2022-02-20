let cart = [];
if (localStorage.getItem("cart")) {
    // eslint-disable-next-line no-const-assign
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct, next) => {
    const exsitsProduct = cart.find((item) => item.id === newProduct.id);
    if (!exsitsProduct) {
        cart.push(newProduct);
    } else {
        exsitsProduct.quantity += +newProduct.quantity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const increaseQuantity = (id, next) => {
    // eslint-disable-next-line no-plusplus
    cart.find((item) => item.id === +id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const decreaseQuantity = (id, next) => {
    // eslint-disable-next-line no-plusplus
    const currentProduct = cart.find((item) => item.id === +id);
    // eslint-disable-next-line no-plusplus
    currentProduct.quantity--;
    if (currentProduct.quantity < 1) {
        const confirm = window.confirm("Bạn có chắc muốn xóa sản phẩm này không");
        if (confirm) {
            cart = cart.filter((item) => item.id !== +id);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};

export const removeItemInCart = (id, next) => {
    const confirm = window.confirm("Ban co chac chan xoa khong?");

    if (confirm) {
        cart = cart.filter((item) => item.id !== +id);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};