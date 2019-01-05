import React, { Component, Fragment } from "react";
import MainContainer from "../layout/MainContainer";
import HeaderNavigation from "../layout/HeaderNavigation";
import FooterNavigation from "../layout/FooterNavigation";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "../../store/store";

class MainPage extends Component {
  render() {
    console.log(this.props);
    return (
      <Fragment>
        <HeaderNavigation />
        <MainContainer />
        <FooterNavigation />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  logged: state.authentification.logged
});

export default MainPage;
