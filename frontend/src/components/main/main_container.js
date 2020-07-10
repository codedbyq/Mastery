import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from "../../actions/modal_actions";
import MainPage from './main_page.jsx';

const mapStateToProps = state => ({
    users: Object.values(state.entities.users)
});

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);