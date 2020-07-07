import * as userAPI from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

// action creator to receive all users
const receiveUsers = users =>  ({
    type: RECEIVE_USERS,
    users
});

// action creator to receive a single user
const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

// thunk action creator to request users and dipatch them to the state
export const fetchUsers = () => dispatch => (
    userAPI.getUsers().then(users => dispatch(receiveUsers()))
);

// thunk action creator to request users and dipatch them to the state
export const fetchUser = userId => dispatch => (
    userAPI.getUser(userId).then(user => dispatch(receiveUser(user)))
);