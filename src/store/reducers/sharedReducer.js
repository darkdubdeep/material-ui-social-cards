import {
  SET_LOADING,
  HIDE_SERVER_ERROR,
  SHOW_SERVER_ERROR
} from '../actions/types';

const initialState = {
  isFetching: false,
  serverError: ''
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
        serverError: action.payload.statusText
      };
    case HIDE_SERVER_ERROR:
      return {
        ...state,
        serverError: ''
      };
    default:
      return state;
  }
}
