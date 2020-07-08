import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducer";
import skills from './skills_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  skills
});

export default RootReducer;
