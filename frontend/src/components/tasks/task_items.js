import React from "react";

class TaskItems extends React.Component {
  render() {
    const { task } = this.props;
    return (
        
      <div>
        <h3>Title: {task.title}</h3>
        <ul>
          <li> {task.details}</li>
          <li> {task.elapsedTime}</li>
          <li> {task.creationDate}</li>
        </ul>
        <br/>
      </div>
    );
  }
}

export default TaskItems
