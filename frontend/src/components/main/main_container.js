import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import MainPage from './main_page';

const mapStateToProps = state => ({
    users: Object.values(state.entities.users)
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);