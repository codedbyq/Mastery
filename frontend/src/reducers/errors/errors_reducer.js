import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import SkillErrorsReducer from "./skill_errors_reducer";
import TaskErrorsReducer from './session_errors_reducer';


export default combineReducers({
  session: SessionErrorsReducer,
  skill: SkillErrorsReducer,
  task: TaskErrorsReducer
});
