import React from "react";
import { withRouter } from "react-router-dom";

// this.skill
//this.user

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      details: "",
      skills: "Choose Skill",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
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
    let task = {
      title: this.state.title,
      details: this.state.details,
      user: this.props.user._id,
      elapsedTime: "0",
      skill: "1"
    };
    this.props
      .taskFormAction(task, this.props.history);
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
    // let modal = document.getElementById("mySignupModal");
    // window.onclick = function (e) {
    //   if (e.target === modal) {
    //     modal.style.display = "none";
    //   }
    // };
    return (
      <div id="modal">
        <form className="modal-content animate">
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
          <h3>Create Task</h3>
          <div className="modal-inputs">
            <input
              type="text"
              value={this.state.title}
              onChange={this.update("title")}
              placeholder="Title"
              className="session-input"
            />
            <label>
              Details:
              <textarea value={this.state.details} onChange={this.update("details")} />
            </label>
          </div>
          <div className="session-button-holder">
            <button className="session-button" onClick={this.handleSubmit}>
              Create
            </button>
          </div>
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(TaskForm);
