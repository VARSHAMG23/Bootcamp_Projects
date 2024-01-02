import React, { Component } from 'react';

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 10,
      isRunning: false,
    };
  }

  componentDidMount() {
    
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.seconds === 1) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.timer = setInterval(() => {
        this.setState((prevState) => ({
          seconds: prevState.seconds - 1,
        }));
      }, 1000);

      this.setState({
        isRunning: true,
      });
    }
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      isRunning: false,
    });
  };

  resetTimer = () => {
    this.clearTimer();
    this.setState({
      seconds: 10,
    });
  };

  clearTimer = () => {
    clearInterval(this.timer);
  };

  render() {
    const { seconds, isRunning } = this.state;

    return (
      <div>
        <h1>Countdown Timer: {seconds} seconds</h1>
        <button onClick={this.startTimer} disabled={isRunning}>
          Start
        </button>
        <button onClick={this.stopTimer} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={this.resetTimer} disabled={isRunning}>
          Reset
        </button>
      </div>
    );
  }
}

export default CountdownTimer;
