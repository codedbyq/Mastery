import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USERS:
            action.users.forEach(user => {
                newState[user.id] = user;
            });
            return newState;

        case RECEIVE_USER:
            newState[action.user.id] = action.user;
            return newState;
    
        default:
            return state;
    }
}

export default usersReducer;