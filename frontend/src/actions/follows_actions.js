import { getUserFollows, createFollow, destroyFollow } from '../util/follow_api_util'

export const RECEIVE_USER_FOLLOWS = "RECEIVE_USER_FOLLOWS";
export const RECEIVE_NEW_FOLLOW = "RECEIVE_NEW_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveUserFollows = (follows) => ({
  type: RECEIVE_USER_FOLLOWS,
  follows,
});

export const receiveNewFollow = (follow) => ({
  type: RECEIVE_NEW_FOLLOW,
  follow,
});

export const removeFollow = (follow) => ({
  type: REMOVE_FOLLOW,
  follow,
});

export const fetchUserFollows = (id) => (dispatch) =>
  getUserFollows(id).then((follows) => dispatch(receiveUserFollows(follows)));

export const newFollow = (data) => (dispatch) => (
  createFollow(data)
    .then((follow) => dispatch(receiveNewFollow(follow)))
    .catch((err) => console.log(err))
);

export const deleteFollow = (data) => (dispatch) => (
  destroyFollow(data).then((follow) => dispatch(removeFollow(follow)))
);
