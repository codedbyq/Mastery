import React from 'react';
// Components
import Skill from './skill';
import { Accordion, Card, Button } from "react-bootstrap";

class SkillList extends React.Component {
    componentDidMount() {
        this.props.getUserSkills(this.props.userId);
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
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
            <Accordion>
              {skillItems}
            </Accordion>
          </>
        );
    }
}

export default SkillList;