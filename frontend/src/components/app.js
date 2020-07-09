import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import '../styles/app.scss'

import NavBarContainer from "./nav/navbar_container";
import MainPageContainer from "./main/main_container";
// import LoginFormContainer from "./session/login_form_container";
// import SignupFormContainer from "./session/signup_form_container";
import Footer from "./footer/footer"
import NewFileUpload from "./upload/new_file_upload";
import FileUpload from "./upload/file_upload";


import "../styles/reset.scss";
import "../styles/application.scss";


const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPageContainer} />
    </Switch>
    <ProtectedRoute path="/" component={FileUpload} />
    <ProtectedRoute path="/" component={NewFileUpload} />
    <Footer />
  </div>
);

export default App;
