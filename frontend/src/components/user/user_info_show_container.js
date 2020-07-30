import { fetchUserFollows, fetchUserFollowers } from "../../actions/follows_actions";
import { fetchUser } from '../../actions/user_actions';
import { connect } from "react-redux";
import UserInfo from "./user_info";
import { newFollow, deleteFollow } from "../../actions/follows_actions";



const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.userId;
  return {
    user: state.entities.users[userId],
    userId: ownProps.userId,
    follows: Object.values(state.entities.follows),
    followers: Object.values(state.entities.followers),
    curUser: state.session.user.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchUserFollows: (id) => dispatch(fetchUserFollows(id)),
  fetchUserFollowers: (id) => dispatch(fetchUserFollowers(id)),
  newFollow: (userId) => dispatch(newFollow(userId)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
