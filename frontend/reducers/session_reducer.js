import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState = nullUser, action) => {
  Object.freeze(oldState);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
    return {
      currentUser: action.currentUser,
      errors: []
    };
    case RECEIVE_ERRORS:
      const errors = { errors: action.errors};
      return merge({}, oldState, errors);
    default:
      return oldState;
  }
};

export default SessionReducer;
