import { connect } from "react-redux";
import SocialFeed from "./social_feed";

import { fetchUserFollows } from "../../../actions/follows_actions";

const mapStateToProps = (state) => {
  const userId = state.session.user.id;

  return {
    user: state.entities.users[userId],
    userId,
    follows: Object.values(state.entities.follows),
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUserFollows: (id) => dispatch(fetchUserFollows(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SocialFeed);
