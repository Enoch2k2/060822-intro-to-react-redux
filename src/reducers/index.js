import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  usersReducer: usersReducer,
  blogsReducer: blogsReducer
})