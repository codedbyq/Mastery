import { connect } from "react-redux";
import { fetchAllTasks } from "../../actions/task_actions";
import Tasks from "./tasks";

const mapStateToProps = (state) => {
    return {
    tasks: Object.values(state.entities.tasks),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllTasks: () => dispatch(fetchAllTasks()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
