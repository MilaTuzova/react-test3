import React, { Component } from 'react';
import './Counter.css';

import { VscAdd, VscChromeMinimize } from 'react-icons/vsc';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    return (
      <div className="Counter">
        <span className="Counter__value"> {this.state.value} </span>{' '}
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            <VscAdd />
          </button>
          <button type="button" onClick={this.handleDecrement}>
            <VscChromeMinimize />
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
