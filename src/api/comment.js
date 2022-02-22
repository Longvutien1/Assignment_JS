import instance from "./instance";

export const getAllComment = () => {
    const url = "/comments";
    return instance.get(url);
};

export const getOrderById = (id) => {
    const url = `/comments/${id}`;
    return instance.get(url);
};

export const addComment = (comment) => {
    const url = "/comments";
    return instance.post(url, comment);
};

export const updateOrder = (product) => {
    const url = `/comments/${product.id}`;
    return instance.put(url, product);
};

export const removeComment = (id) => {
    const url = `/comments/${id}`;
    return instance.delete(url);
};

export const getCommentByIdProduct = (id) => {
    const url = `/comments?product.id=${id}`;
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