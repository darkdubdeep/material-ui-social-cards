import { SET_LOADING, HIDE_SERVER_ERROR } from './types';

export const setLoading = dispatch => {
  dispatch({
    type: SET_LOADING,
    payload: true
  });
};
export const hideServerError = body => dispatch => {
  dispatch({
    type: HIDE_SERVER_ERROR,
    payload: true
  });
};
