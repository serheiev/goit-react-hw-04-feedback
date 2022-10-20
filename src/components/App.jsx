import { useState } from 'react';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export const App = () => {
  const [options, setOptions] = useState({ good: 0, neutral: 0, bad: 0 });

  const plusRate = e => {
    const {
      target: { name, value },
    } = e;
    setOptions(prevState => ({
      ...prevState,
      [name]: Number.parseInt(value) + 1,
    }));
  };

  const totalRate = (good, bad, neutral) => {
    return good + bad + neutral;
  };

  const positivePercentage = (good, bad, neutral) => {
    return Math.round((good / (good + bad + neutral)) * 100);
  };

  const showStat = options.good > 0 || options.neutral > 0 || options.bad > 0;
  const noStatMessage = 'No feedback given ';

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{
            good: options.good,
            bad: options.bad,
            neutral: options.neutral,
          }}
          onLeaveFeedback={plusRate}
        />
      </Section>

      <Section title="Statistics">
        {showStat ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={totalRate(options.good, options.bad, options.neutral) || 0}
            positivePercentage={positivePercentage(
              options.good,
              options.bad,
              options.neutral
            )}
            message={noStatMessage}
          />
        ) : (
          <h3>{noStatMessage}</h3>
        )}
      </Section>
    </>
  );
};
