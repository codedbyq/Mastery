import React from 'react';
import TaskItems from './task_items';

class Task extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  componentWillMount() {
    this.props.fetchAllTasks();
  }

  componentWillReceiveProps(newState) {
    this.setState({ tasks: newState.tasks });
  }

  render() {
    if (this.state.tasks.length === 0) {
      return <div>There are no Tasks</div>;
    } else {
      return (
        <div>
          <h2>All Tasks</h2>
          {this.state.tasks.map((task) => (
            <TaskItems
              key={task._id}
              task={task}
              deleteTask={this.props.deleteTask}
            />
          ))}
        </div>
      );
    }
  }
}

export default Task;