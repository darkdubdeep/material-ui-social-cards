import React, { Component, Fragment } from "react";
import MainContainer from "../layout/MainContainer";
import HeaderNavigation from "../layout/HeaderNavigation";
import FooterNavigation from "../layout/FooterNavigation";

class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderNavigation />
        <MainContainer />
        <FooterNavigation />
      </Fragment>
    );
  }
}

export default MainPage;
