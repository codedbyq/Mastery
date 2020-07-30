import { connect } from "react-redux";
import Dashboard from "./user_dashboard";
import { fetchUser } from '../../actions/user_actions';
import { getUserSkills} from '../../actions/skill_actions'
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => {
  const userId = state.session.user.id;
  return {
    user: state.entities.users[userId],
    skills: state.entities.skills,
    userId,
    curUser: state.session.user.id,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  getUserSkills: id => dispatch(getUserSkills(id)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
