import { fetchSkills, fetchUserSkills, fetchSkill, createSkill, updateSkill, destroySkill } from "../util/skill_api_util";

export const RECEIVE_SKILLS = "RECEIVE_SKILLS";
export const RECEIVE_SKILL = "RECEIVE_SKILL";
export const RECEIVE_SKILL_ERRORS = "RECEIVE_SKILL_ERRORS";
export const RECEIVE_USER_SKILLS = "RECEIVE_USER_SKILLS";
export const REMOVE_SKILL = "REMOVE_SKILL";
export const RECEIVE_NEW_SKILL = "RECEIVE_NEW_SKILL";

export const receiveSkills = (skills) => {
    return {type: RECEIVE_SKILLS,
    skills}
};

export const receiveSkill = (skill) => ({
  type: RECEIVE_SKILL,
  skill
});

export const receiveUserSkills = (skills) => ({
  type: RECEIVE_USER_SKILLS,
  skills
});

export const receiveNewSkill = (skill) => ({
  type: RECEIVE_NEW_SKILL,
  skill
});

export const removeSkill = (skill) => ({
  type: REMOVE_SKILL,
  skill
});

// We dispatch this one to show authentication errors on the frontend
export const receiveErrors = (errors) => ({
  type: RECEIVE_SKILL_ERRORS,
  errors,
});

export const getSkills = () => (dispatch) => {
  return fetchSkills()
    .then((skills) => dispatch(receiveSkills(skills)));
}

export const getUserSkills = (id) => (dispatch) => {
  debugger;
  return fetchUserSkills(id).then((skills) => dispatch(receiveUserSkills(skills)));
}
    

export const getSkill = (id) => (dispatch) =>
    fetchSkill(id)
        .then((skill) => dispatch(receiveSkill(skill)));

export const newSkill = (data) => (dispatch) =>
  createSkill(data)
    .then((skill) => dispatch(receiveNewSkill(skill)),
    (err) => dispatch(receiveErrors(err.response.data))
  );

export const patchSkill = (data) => (dispatch) =>
  updateSkill(data)
    .then((skill) => dispatch(receiveSkill(skill)));

export const deleteSkill = (data) => (dispatch) =>
  destroySkill(data)
    .then((skill) => dispatch(removeSkill(skill)));
