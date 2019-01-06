import { LOGG_IN, LOGG_OUT } from "./types";

export const loggIn = () => dispatch => {
  // axios should be here in the future
  dispatch({
    type: LOGG_IN,
    payload: true
  });
};

export const loggOut = () => dispatch => {
  // axios should be here in the future
  dispatch({
    type: LOGG_OUT,
    payload: false
  });
};
