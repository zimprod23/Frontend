import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

export default combineReducers({
  project: projectReducer,
  task:taskReducer,
  auth:authReducer
});
