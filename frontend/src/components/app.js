import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import '../styles/app.scss'

import NavBarContainer from "./nav/navbar_container";
import MainPageContainer from "./main/main_container";

import Footer from "./footer/footer"
<<<<<<< HEAD
import NewFileUploadContainer from "./upload/new_file_upload_container";
import FileUpload from "./upload/file_upload";
=======
>>>>>>> a38eda4f7f225b674502e47e3c061ade9b7b934c
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import DashboardContainer from './user/user_dash_container';

import TaskContainer from './tasks/tasks_container';

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
<<<<<<< HEAD
    {/* <ProtectedRoute path="/" component={FileUpload} />
    <ProtectedRoute path="/" component={NewFileUploadContainer} /> */}
=======
>>>>>>> a38eda4f7f225b674502e47e3c061ade9b7b934c
    <Footer />
  </div>
);

export default App;
