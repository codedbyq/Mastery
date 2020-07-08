import React, { Component } from 'react';

export default class user_dashboard extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                Dashboard
            </div>
        )
    }
}

