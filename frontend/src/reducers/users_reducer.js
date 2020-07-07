import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        // receive fetched users as an array that we will iterate over and 
        // add each user to our state as key(user id) - value(user object) pair
        case RECEIVE_USERS:
            action.users.forEach(user => {
                newState[user.id] = user;
            });
            return newState;

        // receive a single user that we can add to our state as key(user id) - 
        // value(user object) pair
        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
        
        // on login receive the current user and add to our state as key(user id) - 
        // value(user object) pair
        case RECEIVE_CURRENT_USER:
            newState[action.user.id] = action.user;
            return newState;
    
        default:
            return state;
    }
}

export default usersReducer;