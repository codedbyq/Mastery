import { combineReducers } from "redux";
import session from "./session_api_reducer";
import errors from "./errors_reducer";
import entities from "./entities_reducer";
import ui from "./ui_reducer";
import skills from './skills_reducer";

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  skills,
  ui
});

export default RootReducer;
