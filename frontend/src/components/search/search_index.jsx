import React from 'react';
import UserInfoContainer from '../user/user_info_container';
import Modal from '../modal/modal';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const searchResult = this.props.users ? this.props.users.map(user => (
            <li>{user.username}</li> 
        )) : 'No results found... narrow down your search and try again.'

        return (
            <div className='search-index'>
                <section className='content-main'>
                    <ul>
                        { searchResult }
                    </ul>
                </section>

                <section className="content-side">
                    <UserInfoContainer />
                    <Modal />
                    <div className="create-new-btn">
                        <div>
                            <button
                                className="new-skill-btn light-button"
                                onClick={() => this.props.openModal("create skill")}>
                            
                                New Skill
                            </button>
                        </div>
                        <div>
                            <button 
                                className="light-button" 
                                onClick={() => this.props.openModal("createTask")}> 

                                New Task 
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default SearchIndex;