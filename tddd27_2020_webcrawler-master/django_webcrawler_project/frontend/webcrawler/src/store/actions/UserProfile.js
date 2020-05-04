import * as actionTypes from "./ActionTypes";
import axios from "axios";

/*
 * Get profile data request
 */
export const getUserDataSuccess = (username, email, firstname, lastname) => {
  return {
    type: actionTypes.GET_USER_PROFILE,
    username: username,
    email: email,
    firstname: firstname,
    lastname: lastname,
  };
};

export const getUserData = () => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:8000/rest-auth/user/", {
        headers: { Authorization: "Token " + localStorage.getItem("token") },
      })
      .then((res) => {
        const username = res.data.username;
        const email = res.data.email;
        const firstname = res.data.first_name;
        const lastname = res.data.last_name;
        dispatch(getUserDataSuccess(username, email, firstname, lastname));
      });
  };
};

/*
 * Change password request
 */
export const handleChangePasswordSuccess = (message) => {
  return {
    type: actionTypes.CHANGE_PASSWORD,
    statusMessage: message,
  };
};

export const handleChangePassword = (values) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/rest-auth/password/change/", values, {
        headers: { Authorization: "Token " + localStorage.getItem("token") },
      })
      .then((res) => {
        const message = res.data.detail;
        dispatch(handleChangePasswordSuccess(message));
      })
      .catch((err) => console.log(err));
  };
};

/*
 * Reset password email link request
 */
export const handleStatusMessageSuccess = (statusMessage) => {
  return {
    type: actionTypes.PASSWORD_FORGOT,
    statusMessage: statusMessage,
  };
};

export const handleResetPassword = (values) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/rest-auth/password/reset/", values)
      .then((res) => {
        const statusMessage = res.data.detail;
        dispatch(handleStatusMessageSuccess(statusMessage));
      })
      .catch((err) => console.log(err));
  };
};

export const clearStatusMessage = () => {
  return (dispatch) => {
    dispatch(handleStatusMessageSuccess());
  };
};

/*
 * Reset password confirm link
 */
export const handleResetPasswordConfirmSuccess = (statusMessage) => {
  return {
    type: actionTypes.PASSWORD_RESET,
    statusMessage: statusMessage,
  };
};

export const handleResetPasswordConfirm = (values, token, uid) => {
  return (dispatch) => {
    axios
      .post("http://127.0.0.1:8000/rest-auth/password/reset/confirm/", {
        new_password1: values.new_password1,
        new_password2: values.new_password2,
        token: token,
        uid: uid,
      })
      .then((res) => {
        const statusMessage = res.data.detail;
        dispatch(handleResetPasswordConfirmSuccess(statusMessage));
      })
      .catch((err) => console.log(err));
  };
};
