import React from "react";
import { Link } from "react-router-dom";


class SocialFeedTaskItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount(){
    this.props.fetchUser(this.props.userId)
      .then((res)=>{
        this.setState({username: res.user.data.username})
      });
    this.props.getSkill(this.props.skillId)
      .then((res)=>{
        this.setState(Object.assign({}, {skill: res.skill.data.category}));
      });
  }

  formatDate(timeStr) {
    let splitStr = timeStr.split("T");
    let dates = splitStr[0].split("-");
    let newDate = new Date(dates[0], dates[1], dates[2]);
    let justDate = newDate.toDateString().split(" ");
    justDate.shift();
    return justDate.join(" ");
  }
  getDay(timeStr) {
    let splitStr = timeStr.split("T");
    let dates = splitStr[0].split("-");
    let newDate = new Date(dates[0], dates[1], dates[2]);
    let justDate = newDate.toDateString().split(" ");
    return justDate.shift();
  }

  getFormattedTime(elapsedMinutes){
    let time = ""
    let hours = Math.round(elapsedMinutes/60);
    if (hours === 1){
      time += '1 hour';
    } else if (hours > 1){
      time += hours + ' hours';
    }

    let minutes = elapsedMinutes % 60;
    if (minutes > 0) time += " " + minutes + ' minutes';

    return time;
  }

  render() {
    const { task } = this.props;
    const dateCreated = this.formatDate(task.creationDate);
    const dayOfWeek = this.getDay(task.creationDate);
    return (
      <div className="social-task-container">
       <Link to={`/users/${this.props.userId}`}>
          <div className="social-user-info">
            <p className="social-username">{`${this.state.username} `}</p>
            <p className="social-user-message">just completed this task!</p>
          </div>
        </Link>
        <div id="social-task-header">
          <h3 className="social-task-title">{task.title}</h3>
          <h5 className="social-task-skill">{this.state.skill}</h5>
        </div>
        <ul className="social-task-list">
          <li> {task.details}</li>
          <div className="time-and-date">
            {/* <li> {task.elapsedTime}</li> */}
            <li> {this.getFormattedTime(task.elapsedTime)}</li>
            <li> {`${dayOfWeek} ${dateCreated}`}</li>
          </div>
        </ul>
      </div>
    );
  }
}

export default SocialFeedTaskItem;
