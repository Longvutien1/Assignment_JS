import instance from "./instance";

export const signUp = (user) => {
    const url = "/signup";
    return instance.post(url, user);
};

export const signIn = (user) => {
    const url = "/signin";
    return instance.post(url, user);
};

export const getAllUser = () => {
    const url = "/users";
    return instance.get(url);
};

export const getUserById = (id) => {
    const url = `/users/${id}`;
    return instance.get(url);
};

export const addNewUser = (user) => {
    const url = "/users";
    return instance.post(url, user);
};

export const updateUser = (user) => {
    const url = `/users/${user.id}`;
    return instance.put(url, user);
};

export const removeUser = (id) => {
    const url = `/users/${id}`;
    return instance.delete(url);
};