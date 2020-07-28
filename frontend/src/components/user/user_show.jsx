import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';


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
                                    Skills container will go here
                                    {skills}
                                </Tab>
                                <Tab eventKey="tasks" title="My Tasks">
                                    Tasks container will go here
                                </Tab>
                            </Tabs>
                        </section>

                        <section className="content-side">
                            User info will go here
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}