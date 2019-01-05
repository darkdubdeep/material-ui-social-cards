import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "../../store/store";
import { loggIn } from "../../store/actions/authenticationActions";
import MainPage from "../../components/pages/MainPage";
import LoginPage from "../../components/pages/LoginPage";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { logged } = { ...rest };
  return (
    <Provider store={store}>
      <Route
        {...rest}
        render={props =>
          logged === true ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/login"
              }}
            />
          )
        }
      />
    </Provider>
  );
};

// const PrivateRoute = ({ component: Component, logged: logged }) => (
//   <Provider store={store}>
//     <Route render={() => <MainPage />} />
//   </Provider>
// );

const mapStateToProps = state => ({
  logged: state.authentification.logged
});

export default connect(mapStateToProps)(PrivateRoute);
