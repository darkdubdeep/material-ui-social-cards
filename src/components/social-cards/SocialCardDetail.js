import React, { Component, Fragment } from "react";

import { withRouter } from "react-router-dom";

import HeaderNavigation from "../layout/HeaderNavigation";

import { Provider } from "react-redux";
import store from "../../store/store";

class SocialCardDetail extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(id);
    return (
      <Provider store={store}>
        <Fragment>
          <HeaderNavigation />

          <h1>Social Card Detail</h1>
          <p>{id}</p>
        </Fragment>
      </Provider>
    );
  }
}
export default withRouter(SocialCardDetail);
