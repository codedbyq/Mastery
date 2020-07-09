import { combineReducers } from "redux";

import session from "./sessions/session_api_reducer";
import errors from "./errors/errors_reducer"
import entities from "./entities/entities_reducer"
import ui from "./ui/ui_reducer"

const RootReducer = combineReducers({
  entities,
  session,
  errors,
  ui
});

export default RootReducer;
