import { connect } from 'react-redux';
import SkillForm from './skill_form';
import { newSkill } from '../actions/skill_form';

const mapStateToProps = (state, ownProps) => ({
    userId = state.session.user.id 
});

const mapDispatchToProps = dispatch => ({
    newSkill: skill => dispatch(newSkill(skill))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillForm);