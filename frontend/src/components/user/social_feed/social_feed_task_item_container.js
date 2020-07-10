import { connect } from "react-redux";
import SocialFeedTaskItem from "./social_feed_task_item";

import { getSkill } from "../../../actions/skill_actions";
import { fetchUser } from "../../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    task: ownProps.task,
    skillId: ownProps.task.skill,
    userId: ownProps.task.user,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getSkill: (id) => dispatch(getSkill(id)),
  fetchUser: (id) => dispatch(fetchUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialFeedTaskItem);
