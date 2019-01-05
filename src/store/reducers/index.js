import { combineReducers } from "redux";
import autentificationReducer from "./authenticationReducer";

export default combineReducers({
  authentification: autentificationReducer
});
