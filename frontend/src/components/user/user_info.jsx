import React, { Component } from 'react'

export default class UserInfo extends Component {
    constructor(props) {
        super(props);

        this.handleFollow = this.handleFollow.bind(this);
        this.handleUnFollow = this.handleUnFollow.bind(this);
    }
    componentDidMount() {
        const id = this.props.userId
        this.props.fetchUser(id);
        this.props.fetchUserFollows(id);
        this.props.fetchUserFollowers(id);
    }

    handleFollow() {
        this.props.newFollow( {
            followerId: this.props.userId
        })
    }

    handleUnFollow() {
        const follow = this.props.followers.filter((follower) => follower.userId === this.props.curUser);
        this.props.deleteFollow(follow[0])
    }
    render() {
        const following = this.props.follows ? this.props.follows.length : 0;
        const followers = this.props.followers ? this.props.followers.length : 0;
        const username = this.props.user ? this.props.user.username : null;
        const isFollowing = (this.props.followers.filter(
          (filter) => filter.userId === this.props.curUser
        ).length === 1)
          ? true
          : false;
        const followButton = isFollowing ? (<button onClick={this.handleUnFollow}>Following</button>) : <button onClick={this.handleFollow}>Follow</button>
        return (
            <div className='user-info'>
                <span className='profile-name'>{username}</span>
                    {(this.props.curUser !== this.props.userId) && <div className="follow-button">{ followButton }</div>}
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
