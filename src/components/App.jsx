
import React, { Component } from 'react';

import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from 'components/Section/Section';
import Notification from './Notification/Notification';

import { Container } from './App.styled';

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  handleFeedback = (event) => {
    this.setState((prevState) => ({
      [event]: prevState[event] + 1,
    }))
  }
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }


  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0: Math.round((this.state.good / total) * 100)

  };
  


  render() {
    // const { good, neutral, bad } = this.state;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              {...this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} 
              // good={good}
              // neutral={neutral}
              // bad={bad}
              // total={ this.countTotalFeedback()}
              // positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          ) : (
              <Notification message='There is no feedback'/>
          )}
        </Section>
      </Container>
    )
  }
}

export default App;