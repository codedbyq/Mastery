import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import skillsReducer from "./skills_reducer";

export default combineReducers({
    users: usersReducer,
    skills: skillsReducer
})