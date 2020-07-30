import {
  RECEIVE_USER_FOLLOWS,
  RECEIVE_NEW_FOLLOW,
  REMOVE_FOLLOW,
  REMOVE_FOLLOWER,
} from "../../actions/follows_actions";

const followsReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER_FOLLOWS:
      newState = action.follows.data;
      return newState;
    case RECEIVE_NEW_FOLLOW:
      newState = action.follow.data;
      return newState;
    case REMOVE_FOLLOW:
      delete newState[action.follow.id];
      return newState;
    default:
      return state;
  }
};

export default followsReducer;
