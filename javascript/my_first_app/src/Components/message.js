import React, { Component } from "react";

class Message extends Component {
  constructor() { /* Constructor with initial state pr prestate*/ 
    super();
    this.state = {
      message: "Welcome visitor"
    };
  }

  changeMessage() {  /* Reinisializing the previous mesaage with new message*/
    this.setState({ message: "Thank You!" });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
