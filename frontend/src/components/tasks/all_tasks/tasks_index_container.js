import { connect } from "react-redux";
import { fetchAllTasks, deleteTask } from "../../../actions/task_actions";
import Tasks from "./tasks";

const mapStateToProps = (state) => {
    return {
    tasks: Object.values(state.entities.tasks),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasks()),
    deleteTask: (id) => dispatch(deleteTask(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
