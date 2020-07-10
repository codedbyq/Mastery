import React from 'react'
import MainClock from './main_clock'

class MainPage extends React.Component {
 
  render() {
    return (
      <div className="landing-page">
        <div className="landing-frame">
          <MainClock />
          <h1>Time's Ticking.</h1>
        </div>
        <div>
          <p>Study's suggest that it takes 10,000 hours for a human to master a skill.</p>
        </div>
      </div>
    );
  }
}

export default MainPage;
