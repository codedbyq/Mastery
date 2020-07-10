import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import SocialFeed from './social_feed/social_feed_container'

import '../../styles/dashboard.scss';
import UserTasksContainer from "../tasks/user_tasks/user_tasks_container";
import SkillListContainer from "../skill/skill_list_container";
import UserInfoContainer from './user_info_container';
import Modal from '../modal/modal';


export default class user_dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 1 };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        this.props.fetchUser(this.props.userId);
        this.props.getUserSkills(this.props.userId);
    }

    handleSelect(selected) {
        this.setState({ activeTab: selected });
    }

    render() {
      const user = this.props.user ? this.props.user : null;
      const greeting = user ? `Welcome back, ${user.username}!` : 'Welcome back to Mastery!';
        return (
          <div className="dashboard-container">
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
                      <SocialFeed />
                      <div>The Social feed component will live here.</div>
                    </Tab>
                    <Tab eventKey="skills" title="My Skills">
                      <SkillListContainer />
                    </Tab>
                    <Tab eventKey="tasks" title="My Tasks">
                      <UserTasksContainer />
                    </Tab>
                  </Tabs>
                </section>
                <section className="content-side">
                  <UserInfoContainer />
                  <Modal />
                  <button
                    className="new-skill-btn"
                    onClick={() => this.props.openModal("create skill")}
                  >
                    New Skill
                  </button>
                </section>
              </div>
            </div>
          </div>
        );
    }
}

