import * as actionTypes from "../actions/ActionTypes";
import update from "../utility";

const initState = {
  posts: [],
};

const getPosts = (state, action) => {
  return update(state, {
    posts: action.posts,
  });
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_POSTS:
      return getPosts(state, action);
    case actionTypes.GET_USER_POSTS:
      return getPosts(state, action);
    default:
      return state;
  }
};

export default postReducer;
