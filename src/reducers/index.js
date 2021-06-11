import projectReducer from "./projectReducer";
import { combineReducers } from "redux";

export default combineReducers({
  project: projectReducer,
});
