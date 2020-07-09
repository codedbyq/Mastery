import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      password2: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      let user = {
        email: this.state.email,
        password: this.state.password,
      };
      this.props.login(user);
    }
    this.setState({ errors: nextProps.errors });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.signup(user, this.props.history)
  }

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
    let modal = document.getElementById("mySignupModal");
    window.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
    return (
      <div id="modal">
        <form className="modal-content animate">
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
          <h3>Create An Account</h3>
          <div className="modal-inputs">
            <input
              type="text"
              value={this.state.email}
              onChange={this.update("email")}
              placeholder="Email"
              className="session-input"
            />
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              placeholder="Username"
              className="session-input"
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              placeholder="Password"
              className="session-input"
            />
            <input
              type="password"
              value={this.state.password2}
              onChange={this.update("password2")}
              placeholder="Confirm Password"
              className="session-input"
            />
          </div>
          <div className="session-button-holder">
            <button className="session-button" onClick={this.handleSubmit}>
              Submit
            </button>
            {this.props.otherForm}
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(SignupForm);
