import axios from "axios";

export const fetchSkills = () => {
  return axios.get("/api/skills");
};

export const fetchUserSkills = (id) => {
  return axios.get(`/api/skills/user/${id}`);
};

export const fetchSkill = (id) => {
  return axios.get(`/api/skills/${id}`);
};

export const createSkill = (data) => {
  return axios.post("/api/skills/", data);
};

export const updateSkill = (data) => {
  return axios.patch(`/api/skills/edit/${data._id}`, data);
};

export const destroySkill = (data) => {
  return axios.delete(`/api/skills/${data._id}`);
};