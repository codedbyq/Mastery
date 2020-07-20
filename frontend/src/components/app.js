import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import '../styles/app.scss'

import NavBarContainer from "./nav/navbar_container";
import MainPageContainer from "./main/main_container";

import Footer from "./footer/footer"

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import DashboardContainer from './user/user_dash_container';
import SearchIndexContainer from './search/search_index_container';


import "../styles/reset.scss";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/application.scss";




const App = () => (
  <div className="app">
    <div className="main-content">
      <NavBarContainer />
      <Switch>
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <ProtectedRoute path="/search/:input" component={SearchIndexContainer} />
        <AuthRoute exact path="/" component={MainPageContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
      </Switch>
    </div>
    <Footer />
  </div>
);

export default App;
