import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
import MainPage from "./components/pages/MainPage";
import SocialCardDetail from "./components/social-cards/SocialCardDetail";
import SocialCardCreate from "./components/social-cards/SocialCardCreate";
import SocialCardEdit from "./components/social-cards/SocialCardEdit";
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
              <PrivateRoute exact path="/" component={MainPage} />
            </Switch>
            <Switch>
              <Route path="/login" component={LoginPage} />
            </Switch>
            <Switch>
              <Route path="/registration" component={RegistrationPage} />
            </Switch>
            <Switch>
              <PrivateRoute
                path="/social-card-detail/:id"
                component={SocialCardDetail}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                path="/social-card-create"
                component={SocialCardCreate}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                path="/social-card-edit/:id"
                component={SocialCardEdit}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
