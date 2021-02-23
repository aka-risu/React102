import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import './styles.scss';
class Feedback extends Component {
  state = { good: 0, neutral: 0, bad: 0 };
  onClick = ({ target: { name } }) => {
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
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onClick}
          />
        </Section>

        {!this.countTotalFeedback() ? (
          <Notification message="No feedback given" />
        ) : (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}

export default Feedback;
