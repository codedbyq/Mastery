// Axios calls for user model
import axios from 'axios';

export const getUsers = () => {
    return axios.get("/api/users");
};

export const getUser = userId => {
    return axios.get(`/api/users/${userId}`);
};