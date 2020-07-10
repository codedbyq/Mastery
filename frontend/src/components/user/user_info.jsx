import React, { Component } from 'react'

export default class UserInfo extends Component {

    componentDidMount() {
        const id = this.props.userId
        this.props.fetchUser(id);
        this.props.fetchUserFollows(id);
        this.props.fetchUserFollowers(id);
    }
    render() {
        const following = this.props.follows ? this.props.follows.length : 0;
        const followers = this.props.followers ? this.props.followers.length : 0;
        const username = this.props.user ? this.props.user.username : null;

        return (
            <div className='user-info'>
                <span className='profile-name'>{username}</span>
                <div className='profile-pic'></div>
                <div className='user-stats'>
                    <div className='stat'>
                        <span>{followers}</span>
                        <label>Followers</label>
                    </div>

                    <div className='stat'>
                        <span>{following}</span>
                        <label>Following</label>
                    </div>
                </div>
            </div>
        )
    }
}
