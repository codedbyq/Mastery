import React from 'react';
import UserInfoContainer from '../user/user_info_container';
import { Link } from 'react-router-dom';
import Modal from '../modal/modal';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.fetchUsers();
        this.props.getSkills();
    }

    render() {
        const numResults = this.props.users.length + this.props.skills.length
        const resultsFound = `There were ${numResults} results found for "${this.props.match.params.input}".`
        const userResult = this.props.users ? this.props.users.map(user => (
            <li><Link to={`/users/${user._id}`}>{user.username}</Link></li> 
        )) : null;
        const skillResult = this.props.skills
          ? this.props.skills.map((skill) => (
              <div>
                <li>
                  <Link id='search-skill' to={`/users/${skill.user}`}>{skill.title}</Link> - {skill.category}
                </li>
              </div>
            ))
            : null;
    

        return (
            <div className='search-index'>

                <div className="result-header">
                    <h1>Search Results</h1>
                    <p>{resultsFound}</p>
                </div>

                <div className='results-content'>
                    <section id='results-index' className='content-main'>
                        <div className='user-results'>
                            <h1>Users Found</h1>
                            <ul className='result-list'>
                                {userResult ? userResult : (<li>No users found.</li>) }
                            </ul>
                        </div>
                        <div className='skill-results'>
                            <h1>Skills Found</h1>
                            <ul className='result-list'>
                                {skillResult ? skillResult : (<li>No skills found.</li>) }
                            </ul>
                        </div>
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
            </div>
        )
    }
}

export default SearchIndex;