// Axios calls for user model
import axios from "axios";

export const getUserFollows = (id) => {
  return axios.get(`/api/follows/user/${id}`);
};

export const createFollow = (data) => {
  return axios.post("/api/follows/", data);
};


export const destroyFollow = (data) => {
  return axios.delete(`/api/follows/${data.id}`);
};