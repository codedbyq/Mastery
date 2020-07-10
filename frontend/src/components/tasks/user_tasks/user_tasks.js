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
    this.props.fetchUserTasks(this.props.user._id);
    }
  }

  componentWillReceiveProps(newState) {
    this.setState({ tasks: newState.tasks });
  }

  render() {
    let show = this.state.tasks.length === 0 ?
      (<div>No tasks</div> )
        :
          ( <div>
            {this.state.tasks.reverse().map((task) => (
            <UserTaskItems
              key={task._id}
              task={task}
              deleteTask={this.props.deleteTask}
            />
          ))} 
        </div> )
      return (
        <div>
          <div className="dashboard-task-header">
            <div><h2>My Tasks</h2></div>
            <Modal />
            <div><button className="light-button" onClick={() => this.props.openModal("createTask")}> Create New Task </button></div>
          </div>
          <div>
          {show}
          </div>
        </div>
      );
    }
  }

export default UserTasks;
