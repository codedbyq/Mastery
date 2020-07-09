import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import '../styles/app.scss'

import NavBarContainer from "./nav/navbar_container";
import MainPageContainer from "./main/main_container";

import Footer from "./footer/footer"
import NewFileUploadContainer from "./upload/new_file_upload_container";
import FileUpload from "./upload/file_upload";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import DashboardContainer from './user/user_dash_container';


import "../styles/reset.scss";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/application.scss";




const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path='/dashboard' component={DashboardContainer} />
      <AuthRoute exact path="/" component={MainPageContainer} />
    </Switch>
    <ProtectedRoute path="/" component={FileUpload} />
    <ProtectedRoute path="/" component={NewFileUploadContainer} />
    <Footer />
  </div>
);

export default App;
