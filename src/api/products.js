import instance from "./instance";

export const getAllProduct = () => {
    const url = "/products";
    return instance.get(url);
};

export const getProductById = (id) => {
    const url = `/products/${id}`;
    return instance.get(url);
};

export const add = (product) => {
    const url = "/products";
    return instance.post(url, product);
};

export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product);
};

export const remove = (id) => {
    const url = `/products/${id}`;
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
    const url = "/products?_sort=view&_order=desc&_limit=5";
    return instance.get(url);
};

export const list3product = (page) => {
    const url = `/products?_page=${page}&_start=0&_limit=3`;
    return instance.get(url);
};

export const list5product = (page) => {
    const url = `/products?_page=${page}&_start=0&_limit=5`;
    return instance.get(url);
};