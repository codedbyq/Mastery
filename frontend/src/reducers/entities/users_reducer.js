import { RECEIVE_USER, RECEIVE_USERS } from '../../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        // add all users to our state as key(user id) - value(user object) pair
        case RECEIVE_USERS:
            return Object.assign({}, newState, action.users.data);

        // receive a single user that we can add to our state as key(user id) - 
        // value(user object) pair
        case RECEIVE_USER:
            debugger
            newState[action.user.data._id] = action.user.data;
            return newState;
        
        // on login receive the current user and add to our state as key(user id) - 
        // value(user object) pair
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState;
    
        default:
            return state;
    }
}

export default usersReducer;