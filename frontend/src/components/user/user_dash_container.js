import { connect } from "react-redux";
import Dashboard from "./user_dashboard";

const mapStateToProps = (state) => {
  const userId = state.session.user.id;
  const user = state.entities.users[userId];
  return {
    user: user,
  };
};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
