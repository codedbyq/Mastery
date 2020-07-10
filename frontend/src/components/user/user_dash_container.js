import { connect } from "react-redux";
import Dashboard from "./user_dashboard";
import { fetchUser } from '../../actions/user_actions';
import { getUserSkills} from '../../actions/skill_actions'

const mapStateToProps = (state) => {
  const userId = state.session.user.id;
  return {
    user: state.entities.users[userId],
    skills: state.entities.skills,
    userId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  getUserSkills: id => dispatch(getUserSkills(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
