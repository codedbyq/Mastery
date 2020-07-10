import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import '../../styles/dashboard.scss';
import UserTasksContainer from "../tasks/user_tasks/user_tasks_container";


export default class user_dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 1 };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        this.props.fetchUser(this.props.userId);
        // this.props.getUserSkills(this.props.userId);
    }

    handleSelect(selected) {
        this.setState({ activeTab: selected });
    }

    render() {
      const user = this.props.user ? this.props.user : null;
      const greeting = user ? `Welcome back, ${user.username}!` : 'Welcome back to Mastery!';
        return (
          <div className="dashboard">
            <div className="dashboard-header">
              <h1>Dashboard</h1>
              <p>{greeting}</p>
            </div>
            <div className="dash-content">
              <section className="content-main">
                <Tabs
                  id="dashboard-tabs"
                  //   activeKey={this.state.activeTab}
                  defaultActiveKey="friends"
                  onSelect={this.handleSelect}
                >
                  <Tab eventKey="friends" title="Friends">
                    <p>
                      Check out the latest tasks completed from the friends
                      you're following:
                    </p>
                    <div>The Social feed component will live here.</div>
                  </Tab>
                  <Tab eventKey="skills" title="My Skills">
                    <p>The logged in user's skills will live here.</p>
                  </Tab>
                  <Tab eventKey="tasks" title="My Tasks">
                    <p>The logged in user's skills will live here in chronological order regardless of parent skill.</p>
                    <UserTasksContainer user={user} skills={this.props.skills} />
                  </Tab>
                </Tabs>
              </section>
              <section className="content-side"></section>
            </div>
          </div>
        );
    }
}

