import instance from "./instance";

export const getAllCategories = () => {
    const url = "/categories";
    return instance.get(url);
};

export const getCategoryById = (id) => {
    const url = `/categories/${id}`;
    return instance.get(url);
};

export const addCategories = (category) => {
    const url = "/categories";
    return instance.post(url, category);
};

export const updateCategories = (category) => {
    const url = `/categories/${category.id}`;
    return instance.put(url, category);
};

export const removeCategories = (id) => {
    const url = `/categories/${id}`;
    return instance.delete(url);
};