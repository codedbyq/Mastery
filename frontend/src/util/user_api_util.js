// Axios calls for user model
import axios from 'axios';

export const login = (userData) => {
    return axios.get("/api/users/login", userData);
};