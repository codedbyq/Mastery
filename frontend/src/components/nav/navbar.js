import React from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/modal"
import MyTimer from './timer'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' }
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

  handleInput(e) {
    this.setState({ search: e.target.value });
  }

  search(e) {
    this.props.history.push(`/search/${this.state.search}`);
  }

  render() {
    return (
      <div id="navbar-container">
        <img id='navbar-logo' src="https://emilyschromm.com/wp-content/themes/emfit/assets/footer/footer-logo-2x.png" alt='footer-logo'/>
        <div id="navbar">
          <div id="nav-left">
            <Link to="/" id="logo">
              Mastery
            </Link>
            <Link to="/dashboard" id="nav-left-btn">
              Home
            </Link>
            <a href="https://github.com/codedbyq/Mastery">GitHub</a>
            
          </div>

          <input
            id="search"
            type="search"
            placeholder="Search for a skill or user..."
            onSubmit={this.search}
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
