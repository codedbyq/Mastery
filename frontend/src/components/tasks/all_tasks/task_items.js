import React from "react";

class TaskItems extends React.Component {
  //converts timestamp to month / day / year format
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
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

  handleDelete() {
    this.props.deleteTask(this.props.task._id);
  }

  render() {
    const { task } = this.props;
    const dateCreated = this.formatDate(task.creationDate);
    const dayOfWeek = this.getDay(task.creationDate);
    const taskDetails = task.details ? task.details : "no description";
    return (
      <div>
        <div className="task-card">
          <div className="task-card-content">
            <div className="task-card-header">
              <h3>{task.title}</h3>
            </div>
            <h6>Skill</h6>
            <div>
              <span>
                {dayOfWeek} {dateCreated}{" "}
              </span>
            </div>
            <p>{taskDetails}</p>
            <button onClick={this.handleDelete}>Delete Task</button>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskItems
