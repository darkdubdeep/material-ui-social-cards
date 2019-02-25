import { LOGG_IN, LOGG_OUT } from "../actions/types";

const initialState = {
  logged: JSON.parse(localStorage.getItem("logged")) ? true : false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGG_IN:
      return {
        ...state,
        logged: action.payload
      };
    case LOGG_OUT:
      return {
        ...state,
        loggged: action.payload
      };
    default:
      return state;
  }
}
