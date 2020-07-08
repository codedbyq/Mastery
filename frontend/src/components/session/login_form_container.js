import { connect } from "react-redux";
import React from 'react';
import { login } from "../../actions/session_actions";
import { openModal, closeModal } from '../../actions/modal_actions';
import LoginForm from "./login_form";


const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    otherForm: (
      <button className="session-button" onClick={() => dispatch(openModal('signup'))}>
        Need An Account?
      </button>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
