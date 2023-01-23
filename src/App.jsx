import React, { Component } from 'react';
import Feedback from 'components/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good } = this.state;
    const { neutral } = this.state;
    const { bad } = this.state;
    const total = good + neutral + bad;

    return (
      <>
        <h1>Statistics</h1>
        <Feedback good={good} neutral={neutral} bad={bad} total={total} />
      </>
    );
  }
}

export default App;
