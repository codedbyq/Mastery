import { connect } from 'react-redux';
import SkillForm from './skill_form';
import { newSkill } from '../../actions/skill_actions';

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.user.id,
    errors: state.errors.skill
});

const mapDispatchToProps = dispatch => ({
    newSkill: skill => dispatch(newSkill(skill))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillForm);