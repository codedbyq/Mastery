import { getUserSkills } from '../../actions/skill_actions';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state) => {
    const userId = state.session.user.id;
    return {
        user: state.entities.users[userId],
        skills: state.entities.skills,
        userId,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    getUserSkills: userId => dispatch(getUserSkills(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);