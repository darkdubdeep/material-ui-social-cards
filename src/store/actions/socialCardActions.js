import {
  GET_SOCIAL_CARDS,
  CREATE_SOCIAL_CARD,
  GET_SOCIAL_CARD_FOR_EDIT,
  SAVE_EDITED_SOCIAL_CARD,
  DELETE_SOCIAL_CARD,
  VIEW_SOCIAL_CARD_DETAIL
} from "./types";

export const getSocialCardsList = () => dispatch => {
  // axios should be here in the future
  const res = [
    {
      id: 1,
      title: "First social card",
      date: "September 14, 2019",
      cardMediaImage:
        "https://img1.fonwall.ru/o/dv/stockholm-panorama-stokgolm-shveciya-eq35.jpg?route=mid&amp;h=750",
      cardMediaTitle: "Stockholm",
      cardContentText:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along withthe mussels, if you like.",
      cardBottomText:
        "Sommaren är kort, det vet alla. Speciellt vi i Sverige som inte alltid har 30 grader varmt och solsken! Innan sommarlovet började så lovade jag mig själv att detta lovet inte skulle bli som alla andra lov, jag skulle ta tag i saker, göra saker! T.ex ut och springa minst 2 gånger i veckan, läsa ur minst en av alla mina orörda böcker som står och samlar damm, börja umgås med vänner man inte har träffat på en evighet och massa mer! Jag tror nog att det är såhär för i princip alla! Sommarlov är till för det oväntade, sommarlov är till för att man ska inse vad man igentligen vill, de är till för att man ska sakna alla rutiner man hade när vårterminen var igång. Så när hösten börjar visa sig på det gulnande löven, så ska man börja jobba extra hårt! Det funkar i alla fall för mig, jag längtar redan tillbaks till alla scheman och rutiner...",
      isFavorite: true
    },
    {
      id: 2,
      title: "Second social card",
      date: "September 25, 2018",
      cardMediaImage:
        "https://img1.fonwall.ru/o/dv/stockholm-panorama-stokgolm-shveciya-eq35.jpg?route=mid&amp;h=750",
      cardMediaTitle: "Stockholm",
      cardContentText:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along withthe mussels, if you like.",
      cardBottomText:
        "Sommaren är kort, det vet alla. Speciellt vi i Sverige som inte alltid har 30 grader varmt och solsken! Innan sommarlovet började så lovade jag mig själv att detta lovet inte skulle bli som alla andra lov, jag skulle ta tag i saker, göra saker! T.ex ut och springa minst 2 gånger i veckan, läsa ur minst en av alla mina orörda böcker som står och samlar damm, börja umgås med vänner man inte har träffat på en evighet och massa mer! Jag tror nog att det är såhär för i princip alla! Sommarlov är till för det oväntade, sommarlov är till för att man ska inse vad man igentligen vill, de är till för att man ska sakna alla rutiner man hade när vårterminen var igång. Så när hösten börjar visa sig på det gulnande löven, så ska man börja jobba extra hårt! Det funkar i alla fall för mig, jag längtar redan tillbaks till alla scheman och rutiner...",
      isFavorite: false
    },
    {
      id: 3,
      title: "Third social card",
      date: "September 25, 2018",
      cardMediaImage:
        "https://img1.fonwall.ru/o/dv/stockholm-panorama-stokgolm-shveciya-eq35.jpg?route=mid&amp;h=750",
      cardMediaTitle: "Stockholm",
      cardContentText:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along withthe mussels, if you like.",
      cardBottomText:
        "Sommaren är kort, det vet alla. Speciellt vi i Sverige som inte alltid har 30 grader varmt och solsken! Innan sommarlovet började så lovade jag mig själv att detta lovet inte skulle bli som alla andra lov, jag skulle ta tag i saker, göra saker! T.ex ut och springa minst 2 gånger i veckan, läsa ur minst en av alla mina orörda böcker som står och samlar damm, börja umgås med vänner man inte har träffat på en evighet och massa mer! Jag tror nog att det är såhär för i princip alla! Sommarlov är till för det oväntade, sommarlov är till för att man ska inse vad man igentligen vill, de är till för att man ska sakna alla rutiner man hade när vårterminen var igång. Så när hösten börjar visa sig på det gulnande löven, så ska man börja jobba extra hårt! Det funkar i alla fall för mig, jag längtar redan tillbaks till alla scheman och rutiner...",
      isFavorite: true
    }
  ];
  dispatch({
    type: GET_SOCIAL_CARDS,
    payload: res
  });
};
export const createSocialCard = payload => async dispatch => {
  // axios should be here in the future
  console.log(payload);
  dispatch({
    type: CREATE_SOCIAL_CARD,
    payload: payload
  });
};

export const getSocialCardForEdit = id => async dispatch => {
  // axios should be here in the future
  // const res = await axios.get(
  //   `https://jsonplaceholder.typicode.com/users/${id}`
  // );
  dispatch({
    type: GET_SOCIAL_CARD_FOR_EDIT,
    payload: id // res.data
  });
};

export const saveEditedSocialCard = payload => async dispatch => {
  // const res = await axios.put(
  //   `https://jsonplaceholder.typicode.com/users/${contact.id}`,
  //   contact
  // );
  // axios should be here in the future
  dispatch({
    type: SAVE_EDITED_SOCIAL_CARD,
    payload: payload // res.data
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
