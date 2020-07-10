import { connect } from "react-redux";
import Dashboard from "./user_dashboard";
import { fetchUser } from '../../actions/user_actions';
import { openModal } from "../../actions/modal_actions";


const mapStateToProps = (state) => {
  const userId = state.session.user.id;
  return {
    user: state.entities.users[userId],
    userId,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
