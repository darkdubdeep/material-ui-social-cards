import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { logged } = { ...rest };
  return (
    <Route
      {...rest}
      render={props =>
        logged === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = state => ({
  logged: state.authentification.logged
});

export default connect(mapStateToProps)(PrivateRoute);
