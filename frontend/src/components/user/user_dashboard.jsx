import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';

import '../../styles/dashboard.scss';


export default class user_dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 1 };
        this.handleSelect = this.handleSelect.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleSelect(selected) {
        this.setState({ activeTab: selected });
    }

    render() {
        return (
          <div className="dashboard">
            <div className="dashboard-header">
              <h1>Dashboard</h1>
              <p>Welcome, user!</p>
            </div>
            <div className="dash-content">
              <section className="content-main">
                <Tabs
                  id="dashboard-tabs"
                //   activeKey={this.state.activeTab}
                  defaultActiveKey='friends'
                  onSelect={this.handleSelect}
                >
                  <Tab eventKey="friends" title="Friends" >
                    <p>Check out the latest tasks completed from the friends you're following:</p>
                  </Tab>
                  <Tab eventKey="skills" title="My Skills">
                    my skills
                  </Tab>
                  <Tab eventKey="tasks" title="My Tasks">
                    my tasks
                  </Tab>
                </Tabs>

              </section>
              <section className="content-side"></section>
            </div>
          </div>
        );
    }
}

