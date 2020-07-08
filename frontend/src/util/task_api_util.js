import axios from "axios";

export const fetchAllTasks = () => {
  return axios.get("/api/tasks");
};

export const fetchTask = (taskId) => {
  return axios.get(`/api/tasks/${taskId}`);
};

export const fetchSkillTasks = (skillId) => {
  return axios.get(`/api/tasks/skill/${skillId}`);
};

export const fetchUserTasks = (userId) => {
  return axios.get(`/api/tasks/user/${userId}`);
};

export const createTask = (task) => {
  return axios.post("/api/tasks/", task);
};

export const updateTask = (task) => {
  return axios.patch(`/api/tasks/edit/${task.id}`, task);
};

export const deleteTask = (data) => {
  return axios.delete(`/api/tasks/${task.id}`);
};