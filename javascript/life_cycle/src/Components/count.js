import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10,
      isRunning: false,
    };
  }

  componentDidMount() {
    // Start the countdown when the component mounts
    this.startCountdown();
  }

  componentWillUnmount() {
    // Clear the countdown when the component is about to unmount
    this.clearCountdown();
  }

  startCountdown() {
    if (!this.state.isRunning) {
      // Set up an interval to decrement the count every second
      this.countdown = setInterval(() => {
        this.setState((prevState) => ({
          count: prevState.count - 1,
        }));
      }, 1000);

      this.setState({
        isRunning: true,
      });
    }
  }

  stopCountdown() {
    // Clear the countdown interval
    this.clearCountdown();
    this.setState({
      isRunning: false,
    });
  }

  resetCounter() {
    // Reset the counter to 10
    this.setState({
      count: 10,
    });
  }

  clearCountdown() {
    // Clear the countdown interval
    clearInterval(this.countdown);
  }

  render() {
    return (
      <div style={{ backgroundColor: "white", padding: "20px" }}>
        <p style={{ backgroundColor: "black", padding: "20px" }}>{this.state.count}</p>
        <button onClick={() => this.startCountdown()} disabled={this.state.isRunning}>
          Start
        </button>
        <button onClick={() => this.stopCountdown()} disabled={!this.state.isRunning}>
          Stop
        </button>
        <button onClick={() => this.resetCounter()} disabled={this.state.isRunning}>
          Reset
        </button>
      </div>
    );
  }
}

export default Counter;
