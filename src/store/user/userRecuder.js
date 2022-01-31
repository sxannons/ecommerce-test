import UserActionTypes from './userTypes';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

const userRecuder = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: null };
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: null };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return { ...state, error: action.payload };
    case UserActionTypes.CHECK_USER_SESSION:
      return { ...state };
    default:
      return state;
  }
};

export default userRecuder;
