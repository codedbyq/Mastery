import React from "react";
import { Link } from "react-router-dom";

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
        <div>
          <Link to={"/skills"}>All Skills</Link>
          <Link to={"/profile"}>Profile</Link>
          <Link to={"/new_skill"}>Add a Skill</Link>
          <button onClick={this.logoutUser}>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to={"/signup"}>Signup</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div className='navbar'>
        <div className='nav-left'>
          <Link className='logo'>Mastery</Link>
          <Link className='nav-left-btn'>Home</Link>
          <Link className='nav-left-btn'>Explore</Link>
        </div>

        {this.getLinks()}

        <div className='search-bar'>
          <input type='search' placeholder="Search for a skill or user"/>
        </div>

        <div className='timer'>
          00:00
        </div>
      </div>
    );
  }
}

export default NavBar;
