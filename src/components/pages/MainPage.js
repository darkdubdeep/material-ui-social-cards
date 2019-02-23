import React, { Component, Fragment } from "react";
import MainContainer from "../layout/MainContainer";
import HeaderNavigation from "../layout/HeaderNavigation";

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderNavigation />
        <MainContainer />
      </Fragment>
    );
  }
}

export default MainPage;
