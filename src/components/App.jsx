import { Component } from 'react';
import { Section } from './Section/Section';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  plusRate = e => {
    const {
      target: { name, value },
    } = e;
    this.setState({ [name]: Number.parseInt(value) + 1 });
  };

  totalRate = (good, bad, neutral) => {
    return good + bad + neutral;
  };

  positivePercentage = (good, bad, neutral) => {
    return Math.round((good / (good + bad + neutral)) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const showStat = good > 0 || neutral > 0 || bad > 0;
    const noStatMessage = 'No feedback given ';

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, bad, neutral }}
            onLeaveFeedback={this.plusRate}
          />
        </Section>

        <Section title="Statistics">
          {showStat ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalRate(good, bad, neutral)}
              positivePercentage={this.positivePercentage(good, bad, neutral)}
              message={noStatMessage}
            />
          ) : (
            <h3>{noStatMessage}</h3>
          )}
        </Section>
      </>
    );
  }
}
