import React, { Component } from 'react';
class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  onClick = ({ target: { name } }) => {
    // const { name } = target;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  countTotalFeedback() {
    let total = 0;
    for (let value of Object.values(this.state)) {
      total += value;
    }
    return total;
  }
  countPositiveFeedbackPercentage() {
    return (
      this.state.good &&
      Math.round((this.state.good / this.countTotalFeedback()) * 100)
    );
  }
  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <button onClick={this.onClick} name="good">
          Good
        </button>
        <button onClick={this.onClick} name="neutral">
          Neutral
        </button>
        <button onClick={this.onClick} name="bad">
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>PositiveFeedback: {this.countPositiveFeedbackPercentage()}%</p>
      </>
    );
  }
}

export default Feedback;
