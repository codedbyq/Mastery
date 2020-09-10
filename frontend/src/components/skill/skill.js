import React from 'react';
import { Accordion, Card, Button } from "react-bootstrap";
import SkillTasksContainer from '../tasks/skill_tasks/skill_task_container';
import ProgressBar from './progress_bar'
class Skill extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        tasks: [],
      };
    }

    // componentDidMount(){
    //   let completedTime = (this.totalTime/60)/10000 *100;
    //   let completedEle = document.getElementById("completed");
    //   completedEle.style.width = completedTime + '%';
    //   let remainingTime = (10000 - this.totalTime/60)/10000 * 100;
    //   let remainingEle = document.getElementById("remaining");
    //   remainingEle.style.width = remainingTime + '%';
    // }
    componentWillMount() {
      if (this.props.skill._id) {
        this.props.fetchSkillTasks(this.props.skill._id);
      }
    }

    componentWillReceiveProps(newState) {
      this.setState({ tasks: newState.tasks });
    }


    render() {
        const { skill, deleteSkill, tasks } = this.props;
        const { title, description, _id } = skill;
        let totalTime = 0;
        this.state.tasks.forEach(task => {
          if(task.skill === _id){
            totalTime += task.elapsedTime;
          }
        });
        return (
          <>
            <link
              rel="stylesheet"
              href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
              integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
              crossOrigin="anonymous"
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
                    <div className="skill-preview">
                      <p>{Math.floor(totalTime / 60)} hours {Math.floor(totalTime % 60)} minutes </p>
                      <ProgressBar completed={(totalTime / 60) / 10000 * 100} />
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={_id}>
                  <div>
                    <Card.Body id="card-body">
                      <p>Description</p>
                      <p id="card-description">{description}</p>
                    </Card.Body>
                    <div>
                    <SkillTasksContainer skillTitle={title} skillId={_id} tasks={tasks} />
                    </div>
                    {this.props.userId === this.props.curUser && <Button
                      variant="danger"
                      className="delete-button"
                      onClick={() => deleteSkill(skill)}
                    >
                      Delete Skill
                    </Button>}
                  </div>
                </Accordion.Collapse>
              </Card>
          </>
        );
    }
}

export default Skill;