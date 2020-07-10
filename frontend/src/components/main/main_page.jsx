import React from 'react'
import MainClock from './main_clock'

class MainPage extends React.Component {
 
  render() {
    return (
      <div className="main-session-field">
        <div className='landing-frame'>
          <MainClock /> 
          <h1>Time's Ticking.</h1>
        </div>
      </div>
    );
  }
}

export default MainPage;
