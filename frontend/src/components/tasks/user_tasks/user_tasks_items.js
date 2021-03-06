import React from "react";

class UserTaskItems extends React.Component {
  constructor (props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  //converts timestamp to month / day / year format
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

  handleDelete() {
    this.props.deleteTask(this.props.task._id)
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
      let seconds;
      if (Math.ceil(minutes) === 1) {
        time += " " + Math.ceil(minutes) + ' minute';
      } else {
        time += " " + Math.ceil(minutes) + ' minutes';
      }

      return time;
    }

  render() {
    const { task } = this.props;
    const dateCreated = this.formatDate(task.creationDate);
    const dayOfWeek = this.getDay(task.creationDate);
    const taskDetails = task.details ? task.details : "no description";
    return (
      <div>
        <div className="social-task-container">
          <div className="task-card-content">
            <div className="task-card-header">
              <h3>{task.title}</h3>
              <div>
              <span>
                {dayOfWeek} {dateCreated}
              </span>
              <br />
              <p>Total time: {this.getFormattedTime(task.elapsedTime)}</p>

              </div>
            </div>
            <div>
            </div>
            <p>{taskDetails}</p>
            { this.props.userId === this.props.curUser && <button className="task-delete-button white-button" onClick={this.handleDelete}>Delete Task</button>}
          </div>
        </div>
      </div>
    );
  }
}

export default UserTaskItems;
