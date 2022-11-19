import React, { Component } from 'react'


class Counter extends React.Component {
  state = {
    count: 0
  };

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log(`count state updated ${this.state.count}`);
    })
  };
  render() {
    return (
      <div>
    <h2>Reactjs state example</h2>
    <h4>Button was clicked {this.state.count} times</h4>
    <button onClick={this.increaseCount}>Click here!</button>    
      </div>
    )
  }
}

export default Counter
