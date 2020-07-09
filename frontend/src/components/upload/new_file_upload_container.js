import { connect } from "react-redux";
import React from "react";
import { fetchUser } from "../../actions/user_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
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
