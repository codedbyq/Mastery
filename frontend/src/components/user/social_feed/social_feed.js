import React from "react";
// Components
// import Skill from "./skill";
import SocialFeedTasksContainer from './social_feed_tasks_container'

class SocialFeed extends React.Component {
  componentDidMount() {
    this.props.fetchUserFollows(this.props.userId);
  }

  render() {
    const {
      user,
      follows,
      fetchUserFollows,
    } = this.props;
    const followItems = follows.map((follow) => (
      <SocialFeedTasksContainer id={follow._id} user={follow.userId}/>
    ));
    return (
      <>
        <div>
          <ul className="socialFeed-list">{followItems}</ul>
        </div>
      </>
    );
  }
}

export default SocialFeed;
