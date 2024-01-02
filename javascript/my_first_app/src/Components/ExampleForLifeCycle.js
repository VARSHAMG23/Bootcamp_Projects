/*
Lifecycle of React component(with class)
componentDidMount:while loading the page if u want to display some content in ur browser then u can use 

*/
import React, { Component } from 'react';

export default class ExampleForLifeCycle extends Component {
  componentDidMount() {
    console.log('Hi to initialize variable without/before initialization');
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}
