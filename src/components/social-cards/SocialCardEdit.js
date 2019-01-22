import React, { Component, Fragment } from "react";

import { withRouter } from "react-router-dom";

import HeaderNavigation from "../layout/HeaderNavigation";

import store from "../../store/store";

import PropTyoes from "prop-types";
import { Provider } from "react-redux";
import { connect } from "react-redux";
import { getSocialCardForEdit } from "../../store/actions/socialCardActions";
import { saveEditedSocialCard } from "../../store/actions/socialCardActions";

class SocialCardEdit extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    console.log(this.props);
  }

  render() {
    const { id } = this.props.match.params;

    const { cardBottomText } = this.props.socialCard;

    return (
      <Provider store={store}>
        <Fragment>
          <HeaderNavigation />
          <h1>Social Card edit</h1>
          <h2>{id}</h2>
          <p>{cardBottomText}</p>
        </Fragment>
      </Provider>
    );
  }
}

SocialCardEdit.proptypes = {
  socialCard: PropTyoes.object.isRequired,
  getSocialCardForEdit: PropTyoes.object.isRequired,
  saveEditedSocialCard: PropTyoes.func.isRequired
};

const mapStateToProps = state => ({
  socialCard: state.socialCard.socialCard
});

export default withRouter(
  connect(
    mapStateToProps,
    { getSocialCardForEdit, saveEditedSocialCard }
  )(SocialCardEdit)
);
