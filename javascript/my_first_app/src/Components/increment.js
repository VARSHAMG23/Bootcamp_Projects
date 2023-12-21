
import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  square = () => {
    this.setState({ count: this.state.count * this.state.count });
  };
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <br />
        <br />
        <button onClick={this.decrement}>Decrement</button>
        <br/>
        <br />
        <button onClick={this.square}>Square</button>
      </div>
    );
  }
}

export default Count;

  

