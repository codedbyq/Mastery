import { RECEIVE_SKILL_ERRORS } from "../../actions/skill_actions";

const _nullErrors = [];

const SkillErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SKILL_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default SkillErrorsReducer;
