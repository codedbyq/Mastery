import React from "react";

class MyTimer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.createTask = this.createTask.bind(this);
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 1000);
  };
  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };
  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0,
    });
  };

  createTask = (seconds, minutes, hours) => {
    let time = { seconds: seconds,
                 minutes: minutes,
                 hours: hours};
    this.props.updateTimer(time);
    this.props.openModal("createTask");
  }

  render() {
    const { timerTime } = this.state;
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <>
        <div className={`timer-field-${this.props.size}`}>
          <div className={`timer-numbers-${this.props.size}`}>
            {hours} : {minutes} : {seconds}
          </div>
          <div className='empty-space'></div>
          <div className={`timer-buttons-${this.props.size}`}>
            {this.state.timerOn === false && this.state.timerTime === 0 && (
              <button
                className={`timer-button-${this.props.size}`}
                onClick={this.startTimer}
              >
                Start
              </button>
            )}
            {this.state.timerOn === true && (
              <button 
                className={`timer-button-${this.props.size}`} 
                onClick={this.stopTimer}
              >
                Stop
              </button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
              <button
                className={`timer-button-${this.props.size}`}
                onClick={this.startTimer}
              >
                Resume
              </button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
              <button
                className={`timer-button-${this.props.size}`}
                onClick={this.resetTimer}
              >
                Reset
              </button>
            )}
            {this.state.timerOn === false && this.state.timerTime > 0 && (
              <button
                className={`timer-button-${this.props.size}`}
                onClick={() => this.createTask(seconds, minutes, hours)}
              >
                Create Task
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default MyTimer;
