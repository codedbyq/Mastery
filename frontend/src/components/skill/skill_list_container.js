import { connect } from 'react-redux';
import SkillList from './skill_list';

import { getSkills, getUserSkills, getSkill, newSkill, patchSkill, deleteSkill } from '../../actions/skill_actions';

const mSTP = state => {
    return{
    skills: Object.values(state.entities.skills),
    userId: state.session.user.id
}}

const mDTP = dispatch => ({
    getSkills: () => dispatch(getSkills()),
    getUserSkills: id => dispatch(getUserSkills(id)),
    getSkill: id => dispatch(getSkill(id)),
    newSkill: skill => dispatch(newSkill(skill)),
    patchSkill: skill => dispatch(patchSkill(skill)),
    deleteSkill: skill => dispatch(deleteSkill(skill))
});

export default connect(mSTP, mDTP)(SkillList);