import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import { createTask } from "../../actions/task_actions";
import TaskForm from './task_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.task,
    skills: state.entities.skills,
    type: "create",
    userId: state.session.user.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    taskFormAction: (task) => dispatch(createTask(task)),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
