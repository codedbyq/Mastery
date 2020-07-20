import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session/login_form_container';
import SignupFormContainer from '../session/signup_form_container';
import TaskFormContainer from '../tasks/task_form_container';
import SkillFormContainer from '../skill/skill_form_container';

function Modal({ modal, closeModal, user }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case "createTask":
      component = <TaskFormContainer/>
      break;
    case 'create skill':
      component = <SkillFormContainer />;
      break;
    default:
      return null;
  }
  return (
    <div id="modal-background" onClick={closeModal}>
      <div id="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    user: ownProps.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);