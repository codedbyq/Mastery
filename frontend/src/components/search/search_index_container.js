import connect from 'react-redux';
import SearchIndex from './search_index';
import fetchUsers from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {

    return {

    }
};

const mapDispatchToProps = dispatch => ({
   fetchUsers: () => dispatch(fetchUsers()) 
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchIndex);
