import * as actionTypes from "./ActionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};

export const authFailed = (error) => {
  return {
    type: actionTypes.AUTH_FAILED,
    error: error,
  };
};

export const authSignIn = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password,
      })
      .then((res) => {
        const token = res.data.key;
        //const expTime = new Date(new Date().getTime() + 1800*1000);
        localStorage.setItem("token", token);
        //localStorage.setItem('expTime', expTime);
        dispatch(authSuccess(token));
        // dispatch(checkAuthTimeout(1800));
      })
      .catch((err) => {
        dispatch(authFailed(err));
      });
  };
};

export const authSignUp = (
  username,
  password1,
  password2,
  email,
  firstname,
  lastname
) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", {
        username: username,
        email: email,
        password1: password1,
        password2: password2,
        first_name: firstname,
        last_name: lastname,
      })
      .then((res) => {
        const token = res.data.key;
        // const expTime = new Date(new Date().getTime() + 1800 * 1000);
        localStorage.setItem("token", token);
        // localStorage.setItem("expTime", expTime);
        dispatch(authSuccess(token));
        // dispatch(checkAuthTimeout(1800));
      })
      .catch((err) => {
        dispatch(authFailed(err));
      });
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expTime * 1000);
  };
};

export const checkSignedIn = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (token === undefined) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
    }
  };
};
