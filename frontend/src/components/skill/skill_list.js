import React from 'react';
// Components
import Skill from './skill';
import { Accordion } from "react-bootstrap";

class SkillList extends React.Component {
    componentDidMount() {
        this.props.getUserSkills(this.props.userId);
    }

    render() {
        const { skills, patchSkill, fetchSkillTasks, deleteSkill, tasks } = this.props;
        const skillItems = skills.map((skill) => (
          <Skill
            key={skill._id}
            skill={skill}
            patchSkill={patchSkill}
            fetchSkillTasks={fetchSkillTasks}
            deleteSkill={deleteSkill}
            tasks={tasks}
            userId={this.props.userId}
            curUser= {this.props.curUser}
          />
        ));
        return (
          <>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous"
            />
            <Accordion>
              {skillItems}
            </Accordion>
          </>
        );
    }
}

export default SkillList;