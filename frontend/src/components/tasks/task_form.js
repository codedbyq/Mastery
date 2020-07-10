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
      skills: "",
      errors: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors });
  }

  //update form fields depending on input
  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  //form handle submit
  handleSubmit(e) {
    e.preventDefault();
    const skill = Object.values(this.props.skills).filter((skill) => skill.title === this.state.skills)
    let task = {
      title: this.state.title,
      details: this.state.details,
      user: this.props.userId,
      elapsedTime: "0",
      skill: skill[0]._id
    };
    this.props
      .taskFormAction(task).then((res) => {
        this.props.closeModal();
        this.props.history.push("/dashboard");
      });
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
    const skillsTable = Object.values(this.props.skills).map((skill) => (
      <option value={skill.title}> {skill.title}</option>
    ));

    const selectTable = 
            (<select
              onChange={this.update("skills")}
              value={this.state.skills} >
            
            <option value="">Choose a Skill</option>
            {skillsTable}
              </select>)
    return (
      <div id="modal">
        <form className="modal-content animate" onSubmit={this.handleSubmit}>
          <div onClick={this.props.closeModal} className="close-x">
            X
          </div>
          <h3>Create Task</h3>
          <div className="modal-inputs">
            <label>
              Title: <br />
              <input
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                placeholder="Title"
                className="session-input"
              />
            </label>
            {selectTable}
            {/* <select
              onChange={this.update("skills")}
              value={this.state.skills} >
            
            <option value="">Choose a Skill</option>
            {skillsTable}
            <select> */}
            <label>
              Details:
              <br />
              <textarea
                rows="7"
                cols="30"
                placeholder="add details or a note"
                value={this.state.details}
                onChange={this.update("details")}
              />
            </label>
          </div>
          <div className="session-button-holder">
            <input type="submit" value="Create Task"/>
          </div>
          {this.props.errors && this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(TaskForm);
