import React from 'react';

class SkillDetailView extends React.Component {
    componentDidMount() {
        // this.props.requestTask();
    }

    render() {
        const { skill, deleteSkill } = this.props;
        return (
            <div>
                <p className="skill-body">{skill.body}</p>
                <StepListContainer skill_id={skill.id} />
                <button className="delete-button" onClick={deleteSkill}>
                    Delete Skill
        </button>
            </div>
        );
    }
}

export default SkillDetailView;