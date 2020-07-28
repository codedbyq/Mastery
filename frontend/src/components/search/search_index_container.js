import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchUsers } from '../../actions/user_actions';
import { getSkills } from '../../actions/skill_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const users = Object.values(state.entities.users);
    const skills = Object.values(state.entities.skills);

    const input = ownProps.match.params.input;
    const filteredUsers = users ? users.filter(user => user.username.toLowerCase().includes(input)) : null;
    const filteredSkills = skills ? skills.filter(skill => 
        skill.title.toLowerCase().includes(input) || skill.category.toLowerCase().includes(input)) : null;

    return {
        users: filteredUsers,
        skills: filteredSkills
    }
};

const mapDispatchToProps = dispatch => ({
   fetchUsers: () => dispatch(fetchUsers()),
   getSkills: () => dispatch(getSkills()),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
