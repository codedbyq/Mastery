import {
    RECEIVE_SKILLS,
    RECEIVE_SKILL,
    RECEIVE_USER_SKILLS,
    REMOVE_SKILL,
    RECEIVE_NEW_SKILL
} from "../../actions/skill_actions";

const SkillsReducer = (
  state = { }, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SKILLS:
      newState = action.skills.data;
      return newState;
    case RECEIVE_SKILL:
      newState[action.skill.data._id] = action.skill.data;
      return newState;
    case RECEIVE_USER_SKILLS:
      debugger;
      newState = action.skills.data;
      return newState;
    case RECEIVE_NEW_SKILL:
      newState = action.skill.data;
      return newState;
    case REMOVE_SKILL:
      delete newState[action.skill._id];
      return newState;
    default:
      return state;
  }
};

export default SkillsReducer;
