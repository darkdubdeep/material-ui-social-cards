import { SET_LOADING } from "../actions/types";

const initialState = {
  isFetching: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isFetching: action.payload
      };
    default:
      return state;
  }
}
