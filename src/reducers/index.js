import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";
import authReducer from "./authReducer";
import empReducer from "./empReducer";
import { combineReducers } from "redux";

export default combineReducers({
  project: projectReducer,
  task:taskReducer,
  auth:authReducer,
  emp:empReducer
});
