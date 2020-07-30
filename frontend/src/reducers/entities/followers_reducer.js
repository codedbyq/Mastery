import { RECEIVE_USER_FOLLOWERS, REMOVE_FOLLOWER, RECEIVE_NEW_FOLLOWER} from "../../actions/follows_actions";

const followersReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_USER_FOLLOWERS:
        newState = action.followers.data;
        return newState;
    case RECEIVE_NEW_FOLLOWER:
        debugger
        newState[Object.values(newState).length] = action.follow;
        return newState;
      case REMOVE_FOLLOWER:
        let id;
        let count = 0;
        Object.values(newState).forEach((key) => {
            if (key._id === action.follow) {
                id = count
            }
            count += 1;
        });
        debugger
        delete newState[id];
        return newState;
      default:
        return state;
    }
};

export default followersReducer;