import {
  GET_SOCIAL_CARDS,
  CREATE_SOCIAL_CARD,
  EDIT_SOCIAL_CARD,
  DELETE_SOCIAL_CARD,
  VIEW_SOCIAL_CARD_DETAIL
} from "./types";

export const getSocialCardsList = () => dispatch => {
  // axios should be here in the future
  dispatch({
    type: GET_SOCIAL_CARDS,
    payload: true
  });
};
export const createSocialCard = () => dispatch => {
  // axios should be here in the future
  dispatch({
    type: GET_SOCIAL_CARDS,
    payload: true
  });
};
export const editSocialCard = () => dispatch => {
  // axios should be here in the future
  dispatch({
    type: EDIT_SOCIAL_CARD,
    payload: true
  });
};
export const deleteSocialCard = () => dispatch => {
  // axios should be here in the future
  dispatch({
    type: DELETE_SOCIAL_CARD,
    payload: true
  });
};
export const viewSocialCarddetail = () => dispatch => {
  // axios should be here in the future
  dispatch({
    type: VIEW_SOCIAL_CARD_DETAIL,
    payload: true
  });
};
