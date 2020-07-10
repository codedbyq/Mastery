import { connect } from "react-redux";
import { fetchUser } from "../../actions/user_actions";
import NewFileUpload from "./new_file_upload";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewFileUpload);
