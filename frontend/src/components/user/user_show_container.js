import { getUserSkills } from '../../actions/skill_actions';
import { fetchUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
    const userId = ownProps.match.params.userId;
    return {
        user: state.entities.users[userId],
        skills: Object.values(state.entities.skills),
        userId,
    };
};

const mapDispatchToProps = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    getUserSkills: userId => dispatch(getUserSkills(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);