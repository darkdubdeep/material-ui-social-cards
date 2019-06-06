import { LOGG_IN, LOGG_OUT, REGISTER_USER, SET_LOADING } from './types';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8000/api';

const loadingIndicator = (dispatch, loading) => {
  dispatch({
    type: SET_LOADING,
    payload: loading
  });
};

export const registerUser = body => dispatch => {
  // axios should be here in the future
  loadingIndicator(dispatch, true);
  return axios
    .post(`${apiUrl}/auth/signup`, body, {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    })
    .then(response => {
      console.log(response);
      loadingIndicator(dispatch, false);
      dispatch({
        type: SET_LOADING,
        payload: false
      });
    })
    .catch(error => {
      loadingIndicator(dispatch, false);
      throw error;
    });
};

export const loggIn = () => dispatch => {
  // axios should be here in the future

  localStorage.setItem('logged', true);

  dispatch({
    type: LOGG_IN,
    payload: true
  });
};

export const loggOut = () => dispatch => {
  // axios should be here in the future
  localStorage.removeItem('logged');
  dispatch({
    type: LOGG_OUT,
    payload: false
  });
};
