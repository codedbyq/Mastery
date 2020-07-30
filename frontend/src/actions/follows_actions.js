import { 
  getUserFollowers, 
  getUserFollows, 
  destroyFollow,
  createFollow 
} from '../util/follow_api_util'

export const RECEIVE_USER_FOLLOWERS = "RECEIVE_USER_FOLLOWERS";
export const RECEIVE_USER_FOLLOWS = "RECEIVE_USER_FOLLOWS";
export const RECEIVE_NEW_FOLLOW = "RECEIVE_NEW_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const REMOVE_FOLLOWER = "REMOVE_FOLLOWER";
export const REMOVE_FOLLOWERS = "REMOVE_FOLLOWERS";
export const RECEIVE_NEW_FOLLOWER = "RECEIVE_NEW_FOLLOWER";


export const receiveUserFollowers = (followers) => ({
  type: RECEIVE_USER_FOLLOWERS,
  followers,
});

export const receiveUserFollows = (follows) => ({
  type: RECEIVE_USER_FOLLOWS,
  follows,
});

export const receiveNewFollow = (follow) => ({
  type: RECEIVE_NEW_FOLLOW,
  follow,
});

export const receiveNewFollower = (follow) => ({
  type: RECEIVE_NEW_FOLLOWER,
  follow,
});


export const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow,
});

export const removeFollower = (follow) => ({
  type: REMOVE_FOLLOWER,
  follow,
});


export const fetchUserFollowers = (id) => (dispatch) =>
  getUserFollowers(id).then((followers) => dispatch(receiveUserFollowers(followers)));

export const fetchUserFollows = (id) => (dispatch) =>
  getUserFollows(id).then((follows) => dispatch(receiveUserFollows(follows)));

export const newFollow = (data) => (dispatch) => (
  createFollow(data)
    .then((follow) => {
      debugger
      dispatch(receiveNewFollow(follow))
      dispatch(receiveNewFollower(follow.data))
    })
    .catch((err) => console.log(err))
);

export const deleteFollow = (data) => (dispatch) => (
  destroyFollow(data).then((follow) => {
    debugger
    dispatch(removeFollow(follow.data))
    dispatch(removeFollower(follow.data))
  })
);
