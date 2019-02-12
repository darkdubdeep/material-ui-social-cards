import { combineReducers } from "redux";
import autentificationReducer from "./authenticationReducer";
import socialCardReducer from "./socialCardReducer";
import sharedReducer from "./sharedReducer";

export default combineReducers({
  authentification: autentificationReducer,
  socialCard: socialCardReducer,
  shared: sharedReducer
});
