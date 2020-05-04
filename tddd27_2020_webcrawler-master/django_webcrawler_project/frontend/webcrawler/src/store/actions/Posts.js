import * as actionTypes from "./ActionTypes";
import axios from "axios";

/*
 * Get post data request
 */
export const GetAllPostsSuccess = (posts) => {
  return {
    type: actionTypes.GET_ALL_POSTS,
    posts: posts,
  };
};

export const GetAllPosts = () => {
  return (dispatch) => {
    axios.get("http://127.0.0.1:8000/api/posts/").then((res) => {
      dispatch(GetAllPostsSuccess(res.data));
    });
  };
};

/*
 * Get user posts
 */
export const getUserPostsSuccess = (posts) => {
  return {
    type: actionTypes.GET_USER_POSTS,
    posts: posts,
  };
};

export const getUserPosts = (userID) => {
  return (dispatch) => {
    axios
      .get("http://127.0.0.1:8000/api/userposts/", {
        user_id: userID,
      })
      .then((res) => {
        console.log(res);

        dispatch(getUserPostsSuccess(res.data));
      });
  };
};
