import React from "react";

class SocialFeedTaskItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  componentDidMount(){
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
  render() {
    const { task } = this.props;
    const dateCreated = this.formatDate(task.creationDate);
    const dayOfWeek = this.getDay(task.creationDate);
    return (
      <div>
        <h3>{task.title}</h3>
        <ul>
          <li> {task.details}</li>
          <li> {task.elapsedTime} minutes</li>
          <li> {this.state.skill}</li>
          <li> {`${dayOfWeek} ${dateCreated}`}</li>
        </ul>
        <br />
      </div>
    );
  }
}

export default SocialFeedTaskItem;
