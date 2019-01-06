import React, { Component, Fragment } from "react";
import MainContainer from "../layout/MainContainer";
import HeaderNavigation from "../layout/HeaderNavigation";
import FooterNavigation from "../layout/FooterNavigation";

import { Provider } from "react-redux";
import store from "../../store/store";

class MainPage extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <HeaderNavigation />
          <MainContainer />
          <FooterNavigation />
        </Fragment>
      </Provider>
    );
  }
}

export default MainPage;
