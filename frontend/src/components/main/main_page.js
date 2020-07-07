import React from 'react'
import { Link } from "react-router-dom";


class MainPage extends React.Component {
  render() {
    return (
      <div className="main-session-field">
        <h1>Welcome to Mastery</h1>
        <Link to="/login">
          <button>Have An Account?</button>
        </Link>
        <Link to="/signup">
          <button>Need An Account?</button>
        </Link>
        <footer>Copyright &copy; 2019 Mastery</footer>
      </div>
    );
  }
}

export default MainPage;
