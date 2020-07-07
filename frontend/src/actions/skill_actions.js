import { fetchSkills, fetchUserSkills, fetchSkill, createSkill, updateSkill, destroySkill } from "../util/skill_api_util";

export const RECEIVE_SKILLS = "RECEIVE_SKILLS";
export const RECEIVE_SKILL = "RECEIVE_SKILL";
export const RECEIVE_USER_SKILLS = "RECEIVE_USER_SKILLS";
export const REMOVE_SKILL = "REMOVE_SKILL";
export const RECEIVE_NEW_SKILL = "RECEIVE_NEW_SKILL";

export const receiveSkills = (skills) => ({
    type: RECEIVE_SKILLS,
    skills,
});

export const receiveSkill = (skill) => ({
  type: RECEIVE_SKILL,
  skill,
});

export const receiveUserSkills = (skills) => ({
  type: RECEIVE_USER_SKILLS,
  skills,
});

export const receiveNewSkill = (skill) => ({
  type: RECEIVE_NEW_SKILL,
  skill,
});

export const removeSkill = (skill) => ({
  type: REMOVE_SKILL,
  skill,
});

export const getSkills = () => (dispatch) =>
  fetchSkills()
    .then((skills) => dispatch(receiveSkills(skills)))
    .catch((err) => console.log(err));

export const getUserSkills = (id) => (dispatch) =>
    fetchUserSkills(id)
    .then((skills) => dispatch(receiveUserSkills(skills)))
    .catch((err) => console.log(err));

export const getSkill = (id) => (dispatch) =>
    fetchSkill(id)
        .then((skill) => dispatch(receiveSkill(skill)))
        .catch((err) => console.log(err));

export const newSkill = (data) => (dispatch) =>
  createSkill(data)
    .then((skill) => dispatch(receiveNewSkill(skill)))
    .catch((err) => console.log(err));

export const patchSkill = (data) => (dispatch) =>
  updateSkill(data)
    .then((skill) => dispatch(receiveSkill(skill)))
    .catch((err) => console.log(err));

export const deleteSkill = (data) => (dispatch) =>
  destroySkill(data)
    .then((skill) => dispatch(removeSkill(skill)))
    .catch((err) => console.log(err));
