import { connect } from 'react-redux';
import SkillForm from './skill_form';
import { newSkill } from '../../actions/skill_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => ({
    userId: state.session.user.id,
    errors: state.errors.skill
});

const mapDispatchToProps = dispatch => ({
    newSkill: skill => dispatch(newSkill(skill)),
    closeModal: modal => dispatch(closeModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillForm);