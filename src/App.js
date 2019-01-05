import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
import MainPage from "./components/pages/MainPage";
import SocialCardDetail from "./components/social-cards/SocialCardDetail";
import RegistrationPage from "./components/pages/RegistrationPage";
import LoginPage from "./components/pages/LoginPage";
import PrivateRoute from "./components/router/PrivateRoute";

import { Provider } from "react-redux";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Switch>
              <PrivateRoute exact path="/" component={MainPage} logged={true} />
            </Switch>
            <Switch>
              <Route exact path="/login" component={LoginPage} />
            </Switch>
            <Switch>
              <Route exact path="/registration" component={RegistrationPage} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/social-card-detail"
                component={SocialCardDetail}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
