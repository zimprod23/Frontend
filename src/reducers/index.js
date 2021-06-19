import projectReducer from "./projectReducer";
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

export default combineReducers({
  project: projectReducer,
  task:taskReducer
});
