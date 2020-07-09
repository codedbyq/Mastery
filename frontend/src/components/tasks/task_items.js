import React from "react";

class TaskItems extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div>
        <h3>{task.user}</h3>
        <h3>ID: {task._id}</h3>
        <ul>
          <li>{task.skill}</li>
          <li>{task.title}</li>
          <li>{task.details}</li>
          <li>{task.elapsedTime}</li>
          <li>{task.creationDate}</li>
        </ul>
      </div>
    );
  }
}

export default TaskItems
