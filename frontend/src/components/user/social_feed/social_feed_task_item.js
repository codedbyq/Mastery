import React from "react";

class SocialFeedTaskItem extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div>
        <h3>{task.title}</h3>
        <ul>
          <li> {task.details}</li>
          <li> {task.elapsedTime} minutes</li>
          <li> {task.creationDate}</li>
        </ul>
        <br />
      </div>
    );
  }
}

export default SocialFeedTaskItem;
