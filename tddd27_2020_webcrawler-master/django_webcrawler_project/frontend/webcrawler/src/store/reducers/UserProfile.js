import * as actionTypes from "../actions/ActionTypes";
import update from "../utility";

const initState = {
  username: null,
  email: null,
  firstname: null,
  lastname: null,
  statusMessage: null,
};

const getUserInfo = (state, action) => {
  return update(state, {
    username: action.username,
    email: action.email,
    firstname: action.firstname,
    lastname: action.lastname,
  });
};

const getStatusMessage = (state, action) => {
  return update(state, {
    statusMessage: action.statusMessage,
  });
};

const userProfileReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_PROFILE:
      return getUserInfo(state, action);
    case actionTypes.PASSWORD_FORGOT:
      return getStatusMessage(state, action);
    case actionTypes.PASSWORD_RESET:
      return getStatusMessage(state, action);
    case actionTypes.CHANGE_PASSWORD:
      return getStatusMessage(state, action);
    default:
      return state;
  }
};

export default userProfileReducer;
