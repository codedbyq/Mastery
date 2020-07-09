import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";

class Skill extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }
    componentDidMount() {
        // this.props.;
    }

    toggleDetail(e) {
        e.preventDefault();
        this.setState({
            detail: !this.state.detail
        });
    }

    render() {
        const { skill, deleteSkill, patchSkill } = this.props;
        const { title, description } = skill;
        return (
          <>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossorigin="anonymous"
            />
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      {title}
                      <h2>Place Total Time Here</h2>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <div>
                      <Card.Body>{description}</Card.Body>
                      <h2>TaskListContainer goes here</h2>
                      <button className="delete-button" onClick={deleteSkill}>
                        Delete Skill
                      </button>
                    </div>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
          </>
        );
    }
}

export default Skill;