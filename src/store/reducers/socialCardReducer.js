import {
  GET_SOCIAL_CARDS,
  CREATE_SOCIAL_CARD,
  GET_SOCIAL_CARD_FOR_EDIT,
  SAVE_EDITED_SOCIAL_CARD,
  DELETE_SOCIAL_CARD,
  VIEW_SOCIAL_CARD_DETAIL,
  LIKE_SOCIAL_CARD
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
    case GET_SOCIAL_CARD_FOR_EDIT:
      return {
        ...state,
        socialCard: state.socialCards.find(
          socialCard => socialCard.id == action.payload
        )
      };
    case SAVE_EDITED_SOCIAL_CARD:
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
        socialCard: state.socialCards.find(
          socialCard => socialCard.id == action.payload
        )
      };
    case LIKE_SOCIAL_CARD:
      return {
        ...state,
        socialCards: state.socialCards.map(socialCard => {
          if (socialCard.id === action.payload.id) {
            let foundSocialCard;
            foundSocialCard = socialCard;
            foundSocialCard.isFavorite = action.payload.isFavorite;
            return foundSocialCard;
          } else {
            return socialCard;
          }
        })
      };
    default:
      return state;
  }
}
