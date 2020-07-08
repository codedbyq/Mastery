import React from "react";
import ReactDOM from "react-dom";

import Root from "./components/root";

import configureStore from "./store/store";

import jwt_decode from "jwt-decode";

import { setAuthToken } from "./util/session_api_util";

import { logout } from "./actions/session_actions";

import {
  receiveSkill,
  receiveSkills,
  receiveUserSkills,
  receiveNewSkill,
  removeSkill,
  getSkill,
  getSkills,
  getUserSkills,
  newSkill,
  patchSkill,
  deleteSkill
} from "./actions/skill_actions";

import {
  fetchSkills,
  fetchUserSkills,
  fetchSkill,
  createSkill,
  updateSkill,
  destroySkill
} from './util/skill_api_util'

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(
      localStorage.jwtToken
    );

    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodedUser,
      },
    };

    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout());
      window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }

    window.store = store;
    // window.store = store.getState();
    window.dispatch = store.dispatch;
    window.getState = store.dispatch;
    // window.getState = getState;
    window.getSkill = getSkill();
    window.getSkills = getSkills();
    window.getUserSkills = getUserSkills();
    window.newSkill = newSkill();
    window.patchSkill = patchSkill();
    window.deleteSkill = deleteSkill();

    window.fetchSkills = fetchSkills;
    window.fetchUserSkills = fetchUserSkills;
    window.fetchSkill = fetchSkill;
    window.createSkill = createSkill;
    window.updateSkill = updateSkill;
    window.destroySkill = destroySkill;
      
  const root = document.getElementById("root");

  ReactDOM.render(<Root store={store} />, root);
});
