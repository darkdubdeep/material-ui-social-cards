import { LOGG_IN, LOGG_OUT, REGISTER_USER } from './types';
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:8000/api/';

export const registerUser = ({ body }) => dispatch => {
  // axios should be here in the future
  return axios
    .post(`${apiUrl}/auth/signup`, { body })
    .then(response => {
      dispatch({
        type: REGISTER_USER,
        payload: response
      });
    })
    .catch(error => {
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
