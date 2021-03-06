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
        this.props.fetchUser(this.props.userId).then(() => this.props.getUserSkills(this.props.userId));
    }

    handleSelect(selected) {
        this.setState({ activeTab: selected })
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
                  <div className="create-new-btn">
                  <div>
                  <button
                        className="new-skill-btn light-button"
                    onClick={() => this.props.openModal("create skill")}
                  >
                    New Skill
                  </button>
                    </div>
                    <div><button className="light-button" onClick={() => this.props.openModal("createTask")}> New Task </button></div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        );
    }
}

