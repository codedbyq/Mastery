import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal"
import MyTimer from './timer'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    if (this.props.loggedIn) {
      return (
        <>
          <Link to={"/profile"}>Profile</Link>
          <span className="nav-right-btn" onClick={this.logoutUser}>
            Logout
          </span>
        </>
      );
    } else {
      return (
        <>
          <Modal />
          <span className="nav-right-btn" onClick={() => this.props.openModal('signup')}>Sign Up</span>
          <span className="nav-right-btn" onClick={() => this.props.openModal('login')}>Log In</span>
        </>
      );
    }
  }

  render() {
    return (
      <div id="navbar-container">
        <div id="navbar">
          <div id="nav-left">
            <Link to="/" id="logo">
              Mastery
            </Link>
            <Link to="/dashboard" id="nav-left-btn">
              Home
            </Link>
            <Link to="/" id="nav-left-btn">
              Explore
            </Link>
          </div>

          <input
            id="search"
            type="search"
            placeholder="Search for a skill or user..."
          />

          <div id="nav-right">{this.getLinks()}</div>

          <div id="timer">
            {/* <span id='clock'>00:00</span> */}
            <span id="timer">
              <MyTimer size={"small"}/>
            </span>
          </div>
        </div>

      </div>
    );
  }
}

export default NavBar;
