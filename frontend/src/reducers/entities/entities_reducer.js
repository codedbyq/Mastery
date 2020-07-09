import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';
import SkillsReducer from "./skills_reducer";

export default combineReducers({
    users: usersReducer,
    skills: SkillsReducer,
    tasks: tasksReducer 
});
