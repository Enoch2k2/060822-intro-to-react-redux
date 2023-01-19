import { combineReducers } from "redux";
import blogsReducer from "./blogsReducer";
import sessionsReducer from "./sessionsReducer";

export default combineReducers({
  blogs: blogsReducer,
  sessions: sessionsReducer
})