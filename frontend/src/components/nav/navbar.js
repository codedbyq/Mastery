import React from "react";
import { Link } from "react-router-dom";
import '../../styles/navbar.scss';
import Modal from "../modal/modal"

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
          <button onClick={this.logoutUser}>Logout</button>
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
      <div className='navbar'>
        <div className='nav-left'>
          <Link to='/' className='logo'>Mastery</Link>
          <Link to='/dashboard' className='nav-left-btn'>Home</Link>
          <Link className='nav-left-btn'>Explore</Link>
        </div>

        <input className='search' type='search' placeholder="Search for a skill or user..."/>

        <div className='nav-right'>
          {this.getLinks()}
        </div>

        <div className='timer'>
          <span className='clock'>00:00</span>
        </div>
      </div>
    );
  }
}

export default NavBar;
