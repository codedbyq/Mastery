import { RECEIVE_USER_FOLLOWERS } from "../../actions/follows_actions";

const followersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_USER_FOLLOWERS:
            newState = action.followers.data;
            return newState;
        default:
            return state;
    }
};

export default followersReducer;