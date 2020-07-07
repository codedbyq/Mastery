import {
    RECEIVE_SKILLS,
    RECEIVE_SKILL,
    RECEIVE_USER_SKILLS,
    REMOVE_SKILL,
    RECEIVE_NEW_SKILL
} from "../actions/skill_actions";

const SkillsReducer = (
  state = { }, action ) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_SKILLS:
      action.skills.forEach( skill => {
        nextState[skill.id] = skill;
      });
      return nextState;
    case RECEIVE_SKILL:
      newState[action.skill.data.id] = action.skill.data;
      return newState;
    case RECEIVE_USER_SKILLS:
      newState[action.user.data.id] = action.skills.data;
      return newState;
    case RECEIVE_NEW_SKILL:
      newState = action.skill.data;
      return newState;
    case REMOVE_SKILL:
      delete newState[action.todo.id];
      return newState;
    default:
      return state;
  }
};

export default SkillsReducer;
