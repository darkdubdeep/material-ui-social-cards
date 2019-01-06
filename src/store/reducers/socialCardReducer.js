import {
  GET_SOCIAL_CARDS,
  CREATE_SOCIAL_CARD,
  EDIT_SOCIAL_CARD,
  DELETE_SOCIAL_CARD,
  VIEW_SOCIAL_CARD_DETAIL
} from "../actions/types";

const initialState = {
  socialCards: [],
  socialCard: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_SOCIAL_CARDS:
      return {
        ...state,
        socialCards: action.payload
      };
    case CREATE_SOCIAL_CARD:
      return {
        ...state,
        socialCards: [action.payload, ...state.socialCards]
      };
    case EDIT_SOCIAL_CARD:
      return {
        ...state,
        socialCards: state.socialCards.map(socialCard =>
          socialCard.id === action.payload.id
            ? (socialCard = action.payload)
            : socialCard
        )
      };
    case DELETE_SOCIAL_CARD:
      return {
        ...state,
        socialCards: state.socialCards.filter(
          socialCard => socialCard.id !== action.payload
        )
      };
    case VIEW_SOCIAL_CARD_DETAIL:
      return {
        ...state,
        socialCard: action.payload
      };
    default:
      return state;
  }
}
