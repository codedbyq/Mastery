import { combineReducers } from "redux";
import session from "./session_api_reducer";
<<<<<<< HEAD
import errors from "./errors_reducer"
import entities from "./entities_reducer"
import ui from "./ui_reducer"
import skills from "./skills_reducer"
=======
import errors from "./errors_reducer";
import entities from "./entities_reducer";
import ui from "./ui_reducer";
import skills from "./skills_reducer";
>>>>>>> af4220428798ab31060321b449882cfd7a49a78a

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  skills,
  ui
});

export default RootReducer;
