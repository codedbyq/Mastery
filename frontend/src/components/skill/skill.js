import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";
import SkillTasksContainer from '../tasks/skill_tasks/skill_task_container';
class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        const { skill, deleteSkill, patchSkill } = this.props;
        const { title, description, _id } = skill;
        return (
          <>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
              <Card id="card">
                <Card.Header>
                  <Accordion.Toggle
                    id="skill-accordion"
                    as={Button}
                    variant="link"
                    eventKey={_id}
                  >
                    <p>{title}</p>
                    <p>Place Total Time Here</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={_id}>
                  <div>
                    <Card.Body id="card-body">
                      <p>Description</p>
                      <p id="card-description">{description}</p>
                    </Card.Body>
                    <div>
                    <SkillTasksContainer skillTitle={title} skillId={_id}/>
                    </div>
                    <Button
                      variant="danger"
                      className="delete-button"
                      onClick={deleteSkill}
                    >
                      Delete Skill
                    </Button>
                  </div>
                </Accordion.Collapse>
              </Card>
          </>
        );
    }
}

export default Skill;