import React from 'react';
// Components
import Skill from './skill';

class SkillList extends React.Component {
    componentDidMount() {
        this.props.getSkills();
    }

    render() {
        const { skills, getSkills, getUserSkills, getSkill, newSkill,
           patchSkill, deleteSkill } = this.props;
        const skillItems = skills.map(skill => (
            <Skill
                key={skill._id}
                skill={skill}
                patchSkill={patchSkill} />
        )
        );
        return (
          <>
            <div>
              <ul className="skill-list">{skillItems}</ul>
            </div>
          </>
        );
    }
}

export default SkillList;