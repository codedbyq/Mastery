import React from "react";
import { withRouter } from "react-router-dom";

// this.skill
//this.user

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    let h, m, s;
    if (this.props.time){
      h = this.props.time.hours;
      m = this.props.time.minutes;
      s = this.props.time.seconds;
    }
    if (h === "00") { h = "" };
    if (m === "00") { m = "" };
    if (s === "00") { s = "" };
    this.state = {
      title: "",
      details: "",
      skills: "",
      errors: {},
      hour: h,
      min: m,
      sec: s
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
    let skillId;
    if (skill.length === 1) {
      skillId = skill[0]._id; 
    } else {
      skillId = "";
    }
    let totalMinutes = parseFloat((this.state.hour * 60) + parseInt((this.state.min)) + '.' + parseInt(this.state.sec));
    let task = {
      title: this.state.title,
      details: this.state.details,
      user: this.props.userId,
      elapsedTime: `${totalMinutes}`,
      skill: skillId
    };
    this.props
      .taskFormAction(task).then((res) => {
        this.props.closeModal();
        this.props.history.push("/dashboard");
        this.props.clearTimer();
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
    let modal = document.getElementById("mySignupModal");
    window.onclick = function (e) {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
    const skillsTable = Object.values(this.props.skills).map((skill) => (
      <option value={skill.title}> {skill.title}</option>
    ));

    const selectSkillTable = 
            (<select
              onChange={this.update("skills")}
              value={this.state.skills} >
            
            <option value="">Choose a Skill</option>
            {skillsTable}
              </select>)

    let temp = "x"
    if (this.props.time) {temp = "with-time"}
    
    return (
      <div id="modal" className={temp}>
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
            <label>Skill:<br />
            {selectSkillTable}
            </label>

            <div className="duration-container">
              <label>
                Duration:
                <br />
                <div className="duration-flex">
                  <div className="duration-hour-container">
                    <input
                      className="duration-hour"
                      onChange={this.update("hour")}
                      type="text"
                      placeholder="hr"
                      value={this.state.hour || ""}
                    />
                  </div>
                  <div className="duration-min-container">
                    <input
                      className="duration-min"
                      onChange={this.update("min")}
                      type="text"
                      placeholder="min"
                      value={this.state.min || ""}
                    />
                  </div>

                  <div className="duration-sec-container">
                    <input
                      className="duration-sec"
                      onChange={this.update("sec")}
                      type="text"
                      placeholder="sec"
                      value={this.state.sec || ""}
                    />
                  </div>
                </div>
              </label>
            </div>

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
          {this.renderErrors()}
        </form>
      </div>
    );
  }
}

export default withRouter(TaskForm);
