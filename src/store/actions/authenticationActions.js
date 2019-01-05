import { LOGG_IN, LOGG_OUT } from "./types";

// axios should be here in the future

export const loggIn = () => dispatch => {
  dispatch({
    type: LOGG_IN,
    payload: true
  });
};

export const loggOut = () => dispatch => {
  dispatch({
    type: LOGG_OUT,
    payload: false
  });
};
