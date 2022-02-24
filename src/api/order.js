import instance from "./instance";

export const getAllOrder = () => {
    const url = "/order";
    return instance.get(url);
};

export const getOrderById = (id) => {
    const url = `/order/${id}`;
    return instance.get(url);
};
export const getOrderByIdUser = (id) => {
    const url = `/order?userInformation.idUser=${id}`;

    return instance.get(url);
};
export const addOrder = (order, product) => {
    const url = "/order";
    return instance.post(url, order, product);
};

export const updateOrder = (product) => {
    const url = `/order/${product.id}`;
    return instance.put(url, product);
};

export const removeOrder = (id) => {
    const url = `/order/${id}`;
    return instance.delete(url);
};

export const getProductByCategoryId = (categoryId) => {
    const url = `/products?categoryId=${categoryId}`;
    return instance.get(url);
};

export const getProductByName = (productName) => {
    const url = `/products?productName=${productName}`;
    return instance.get(url);
};

export const sortProductByView = () => {
    const url = "/products?_sort=view&_order=desc";
    return instance.get(url);
};

export const list3product = (page) => {
    const url = `/products?_page=${page}&_start=0&_limit=3`;
    return instance.get(url);
};

export const list5orders = (page) => {
    const url = `/order?_page=${page}&_start=0&_limit=5`;
    return instance.get(url);
};