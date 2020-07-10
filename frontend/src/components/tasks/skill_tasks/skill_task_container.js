import { connect } from "react-redux";
import { fetchSkillTasks, fetchUserTasks, deleteTask } from "../../../actions/task_actions";
import SkillTasks from "./skill_tasks";
import { openModal } from '../../../actions/modal_actions';


const mapStateToProps = (state, ownProps) => {
    return {
        tasks: Object.values(state.entities.tasks),
        skills: state.entities.skills,
        user: state.session.user,
        skillId: ownProps.skillId,
        skillTitle: ownProps.skillTitle
        
    };
};

const mapDispatchToProps = (dispatch) => {

    return {
        fetchUserTasks: (userId) => dispatch(fetchUserTasks(userId)),
        deleteTask: (id) => dispatch(deleteTask(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        fetchSkillTasks: (id) => dispatch(fetchSkillTasks(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SkillTasks);
