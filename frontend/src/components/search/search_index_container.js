import { connect } from 'react-redux';
import SearchIndex from './search_index';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
    const users = Object.values(state.entities.users);
    const input = ownProps.match.params.input;
    const filtered = users ? users.filter(user => user.username.toLowerCase().includes(input)) : null;

    return {
        users: filtered
    }
};

const mapDispatchToProps = dispatch => ({
   fetchUsers: () => dispatch(fetchUsers()),
    openModal: (modal) => dispatch(openModal(modal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
