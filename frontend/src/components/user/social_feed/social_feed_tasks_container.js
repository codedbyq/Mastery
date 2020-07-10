import { connect } from "react-redux";
import { fetchUserTasks } from "../../../actions/task_actions";
import SocialFeedTasks from "./social_feed_tasks";

const mapStateToProps = (state, ownProps) => {
  return {
    userId: ownProps.user,
    tasks: Object.values(state.entities.tasks),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserTasks: (id) => dispatch(fetchUserTasks(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SocialFeedTasks);
