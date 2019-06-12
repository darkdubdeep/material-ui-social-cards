import {
  SET_LOADING,
  HIDE_SERVER_ERROR,
  SHOW_SERVER_SUCCESS,
  HIDE_SERVER_SUCCESS
} from './types';

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
export const showServerSuccess = body => dispatch => {
  dispatch({
    type: HIDE_SERVER_ERROR,
    payload: true
  });
};
export const hideServerSuccess = body => dispatch => {
  dispatch({
    type: HIDE_SERVER_SUCCESS,
    payload: ''
  });
};
