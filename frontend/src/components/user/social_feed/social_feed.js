import React from "react";
// Components
// import Skill from "./skill";

class SkillList extends React.Component {
  componentDidMount() {
    this.props.fetchUserFollows(this.props.userId);
  }

  render() {
    debugger
    const {
      user,
      follows,
      fetchUserFollows,
    } = this.props;
    const skillItems = follows.map((follow) => (
      <li></li>
    ));
    return (
      <>
        <div>
          <ul className="skill-list">{skillItems}</ul>
        </div>
      </>
    );
  }
}

export default SkillList;
