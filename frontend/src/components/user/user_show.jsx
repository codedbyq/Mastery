import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import UserTasksShowContainer from "../tasks/user_tasks/user_tasks_show_container";
import SkillListShowContainer from "../skill/skill_list_show_container";
import UserInfoShowContainer from "../user/user_info_show_container"


export default class UserShow extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 1 };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        this.props.fetchUser(this.props.userId).then(() => this.props.getUserSkills(this.props.userId));
    }

    handleSelect(selected) {
        this.setState({ activeTab: selected });
    }

    render() {
        const user = this.props.user ? this.props.user : null;
        const greeting = user ? `Check out what ${user.username} has been up to!` : 'Check out what your friend has been up to!';
        const skills = this.props.skills ? this.props.skills.map(skill => (
            <div>
                <li>{skill.title}</li>
                <li>{skill.description}</li>
                <li>{skill.creationDate}</li>
            </div>
        )) : null

        return (
          <div className="dashboard-container">
            <div className="dashboard">
              <div className="dashboard-header">
                <h1>Discover</h1>
                <p>{greeting}</p>
              </div>
              <div className="dash-content">
                <section className="content-main">
                  <Tabs
                    id="dashboard-tabs"
                    defaultActiveKey="skills"
                    onSelect={this.handleSelect}
                  >
                    <Tab eventKey="skills" title="My Skills">
                      <SkillListShowContainer userId={this.props.userId} />
                    </Tab>
                    <Tab eventKey="tasks" title="My Tasks">
                      <UserTasksShowContainer userId={this.props.userId} />
                    </Tab>
                  </Tabs>
                </section>

                <section className="content-side">
                  <UserInfoShowContainer />
                </section>
              </div>
            </div>
          </div>
        );
    }
}
