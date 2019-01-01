import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { Provider } from "react-redux";
import MainPage from "./components/pages/MainPage";
import SocialCardDetail from "./components/social-cards/SocialCardDetail";
import RegistrationPage from "./components/pages/RegistrationPage";
import LoginPage from "./components/pages/LoginPage";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={MainPage} />
          </Switch>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
          </Switch>
          <Switch>
            <Route exact path="/registration" component={RegistrationPage} />
          </Switch>
          <Switch>
            <Route
              exact
              path="/social-card-detail"
              component={SocialCardDetail}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
