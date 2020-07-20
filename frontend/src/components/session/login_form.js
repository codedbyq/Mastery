import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  // Once the user has been authenticated, redirect to the Dashboard page
  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser === true) {
      this.props.closeModal();
    }

    // Set or clear errors
    this.setState({ errors: nextProps.errors });
  }

  // Handle field updates (called in the render method)
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  // Handle form submission
  handleSubmit(e) {
    e.preventDefault();

    let user = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.login(user)
      .then((res) => {
        this.props.closeModal();
      }
      );
  }

  // Handle Demo Login
  handleDemo(e) {
    e.preventDefault();

    const demo = {
      email: 'demo@demo.com',
      password: '123456'
    }
    this.props.login(demo)
      .then((res) => {
        this.props.closeModal();
        this.props.history.push("/dashboard");
      });
  }

  // Render the session errors if there are any
  renderErrors() {
    return (
      <ul>
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>{this.state.errors[error]}</li>
        ))}
      </ul>
    );
  }

  render() {

    return (

      <div id="modal">
        <form className="modal-content animate">
            <div onClick={this.props.closeModal} className="close-x">X</div>
            <h3>Log In</h3>
            <div className="modal-inputs">
              <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                placeholder="Email"
                className="session-input"
              />
              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="Password"
                className="session-input"
              />
            </div>
            <div className="session-button-holder">
              <button value="Submit" className="session-button" onClick={this.handleSubmit}>Submit</button>
              <button className='session-button' onClick={this.handleDemo}>Demo Login</button>
              {this.props.otherForm}
            </div>
            {this.renderErrors()}
        </form>
      </div>

    );
  }
}

export default withRouter(LoginForm);
