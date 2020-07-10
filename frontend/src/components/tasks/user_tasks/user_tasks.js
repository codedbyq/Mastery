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
            {this.state.tasks.map((task) => (
            <UserTaskItems
              key={task._id}
              task={task}
              deleteTask={this.props.deleteTask}
            />
          ))} 
        </div> )
      return (
        <div>
          <div>
            <h2>Tasks</h2>
            <Modal user={this.props.user} skills={this.props.skills}/>
            <button onClick={() => this.props.openModal("createTask")}> Create New Task </button>
          </div>
          <div>
          {show}
          </div>
        </div>
      );
    }
  }

export default UserTasks;
