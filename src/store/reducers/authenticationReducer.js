import { LOGG_IN, LOGG_OUT, REGISTER_USER } from '../actions/types';

const initialState = {
  logged: JSON.parse(localStorage.getItem('logged')) ? true : false,
  registered: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registered: action.payload
      };
    case LOGG_IN:
      return {
        ...state,
        logged: action.payload
      };
    case LOGG_OUT:
      return {
        ...state,
        logged: action.payload
      };
    default:
      return state;
  }
}
