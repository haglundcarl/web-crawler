import { combineReducers } from "redux";
import authReducer from "./Auth";
import userProfileReducer from "./UserProfile";
import postReducer from "./Posts";

//add reducers
const rootReducer = combineReducers({
  auth: authReducer,
  user: userProfileReducer,
  post: postReducer,
});

export default rootReducer;
