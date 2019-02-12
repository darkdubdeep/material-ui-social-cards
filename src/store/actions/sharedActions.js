import { SET_LOADING } from "./types";

export const setLoading = () => {
  dispatch({
    type: SET_LOADING,
    payload: true
  });
};
