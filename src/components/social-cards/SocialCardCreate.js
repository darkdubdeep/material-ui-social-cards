import React, { Component, Fragment } from "react";

import HeaderNavigation from "../layout/HeaderNavigation";

import { Provider } from "react-redux";
import store from "../../store/store";

class SocialCardCreate extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <HeaderNavigation />
          <h1>Create card</h1>
        </Fragment>
      </Provider>
    );
  }
}
export default SocialCardCreate;
