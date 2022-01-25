import instance from "./instance";

export const getAllProduct = () => {
    const url = "/posts";
    return instance.get(url);
};

export const getProductById = (id) => {
    const url = `/posts/${id}`;
    return instance.get(url);
};

export const add = (product) => {
    const url = "/posts";
    return instance.post(url, product);
};

export const update = (product) => {
    const url = `/posts/${product.id}`;
    return instance.put(url, product);
};

export const remove = (id) => {
    const url = `/posts/${id}`;
    return instance.delete(url);
};