import React, { Component, Fragment } from "react";

import { withRouter } from "react-router-dom";

import HeaderNavigation from "../layout/HeaderNavigation";

import { Provider } from "react-redux";
import store from "../../store/store";

class SocialCardEdit extends Component {
  render() {
    const { id } = this.props.match.params;
    return (
      <Provider store={store}>
        <Fragment>
          <HeaderNavigation />
          <h1>Social Card edit</h1>
          <h2>{id}</h2>
        </Fragment>
      </Provider>
    );
  }
}
export default withRouter(SocialCardEdit);
