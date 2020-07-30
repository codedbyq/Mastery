import React from "react";
import UserTaskItems from "../user_tasks/user_tasks_items";
import Modal from "../../modal/modal"

class UserTasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  componentWillMount() {
    if (this.props.user) {
    this.props.fetchUserTasks(this.props.user.id);
    }
  }

  componentWillReceiveProps(newState) {
    this.setState({ tasks: newState.tasks });
  }

  render() {
    let show = this.state.tasks.length === 0 ?
      (<div>No tasks</div> )
        :
          ( <div className="task-solo-items">
            {this.state.tasks.reverse().map((task) => (
            <UserTaskItems
              key={task._id}
              task={task}
              deleteTask={this.props.deleteTask}
              userId= {this.props.userId}
              curUser = {this.props.curUser}
            />
          ))} 
        </div> )
      let createTask = this.props.userId === this.props.curUser ? (
        <div>
          <button
            className="light-button"
            onClick={() => this.props.openModal("createTask")}
          >
            {" "}
            Create New Task{" "}
          </button>
        </div>
      ) : ""

      return (
        <div>
          <div className="dashboard-task-header">
            <Modal />
        {createTask}
          </div>
          <div>
          {show}
          </div>
        </div>
      );
    }
  }

export default UserTasks;
