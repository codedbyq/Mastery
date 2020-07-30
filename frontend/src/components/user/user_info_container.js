import { fetchUserFollows, fetchUserFollowers } from "../../actions/follows_actions";
import { fetchUser } from '../../actions/user_actions';
import { connect } from "react-redux";
import UserInfo from "./user_info";


const mapStateToProps = (state) => {
    const userId = state.session.user.id;
    return {
      user: state.entities.users[userId],
      userId,
      follows: Object.values(state.entities.follows),
      followers: Object.values(state.entities.followers),
      curUser: state.session.user.id,
    };
};

const mapDispatchToProps = (dispatch) => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchUserFollows: (id) => dispatch(fetchUserFollows(id)),
    fetchUserFollowers: (id) => dispatch(fetchUserFollowers(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
