import React from "react";
import SocialFeedTaskItemContainer from "./social_feed_task_item_container";

class SocialFeedTasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [],
    };
  }

  componentWillMount() {

    this.props.fetchUserTasks(this.props.userId).then((res)=>{
      this.setState({ tasks: Object.values(res.tasks.data) });
    });
  }

  // componentWillReceiveProps(newState) {
  //   this.setState({ tasks: newState.tasks });
  // }

  render() {
    return (
      <div>
        {this.state.tasks.map((task) => (
          <SocialFeedTaskItemContainer key={task._id} task={task} />
        ))}
      </div>
    );
  }

};

export default SocialFeedTasks;
