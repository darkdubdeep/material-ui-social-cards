import { combineReducers } from "redux";
import autentificationReducer from "./authenticationReducer";
import socialCardReducer from "./socialCardReducer";

export default combineReducers({
  authentification: autentificationReducer,
  socialCard: socialCardReducer
});
