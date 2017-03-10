import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_LOGOUT = 'RECEIVE_LOGOUT';


export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveLogout = () => ({
  type: RECEIVE_LOGOUT
});




export const requestLogin = (user) => dispatch => {
  return APIUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail( error => dispatch(receiveErrors(error.responseJSON)));
};

export const requestLogout = () => dispatch => {
  return APIUtil.logout().then(
    () => dispatch(receiveLogout())
  );
};

export const requestSignup = (user) => dispatch => {
  return APIUtil.signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail( error => dispatch(receiveErrors(error.responseJSON)));
};
