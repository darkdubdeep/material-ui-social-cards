import {
  SET_LOADING,
  HIDE_SERVER_ERROR,
  SHOW_SERVER_ERROR,
  SHOW_SERVER_SUCESS
} from '../actions/types';

const initialState = {
  isFetching: false,
  serverError: '',
  serverSuccess: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isFetching: action.payload
      };
    case SHOW_SERVER_ERROR:
      return {
        ...state,
        serverError: action.payload
      };
    case HIDE_SERVER_ERROR:
      return {
        ...state,
        serverError: ''
      };
    case SHOW_SERVER_SUCESS:
      return {
        ...state,
        serverSuccess: action.payload
      };
    default:
      return state;
  }
}
