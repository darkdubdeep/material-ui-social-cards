import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "../../store/store";

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
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    </Provider>
  );
};

const mapStateToProps = state => ({
  logged: state.authentification.logged
});

export default connect(mapStateToProps)(PrivateRoute);
