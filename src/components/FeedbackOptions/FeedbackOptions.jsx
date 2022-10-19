import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({
  options: { good, bad, neutral },
  onLeaveFeedback,
}) => {
  return (
    <>
      <Button
        name="good"
        value={good}
        type="button"
        onLeaveFeedback={onLeaveFeedback}
      >
        Good
      </Button>

      <Button
        name="neutral"
        value={neutral}
        type="button"
        onLeaveFeedback={onLeaveFeedback}
      >
        Neutral
      </Button>

      <Button
        name="bad"
        value={bad}
        type="button"
        onLeaveFeedback={onLeaveFeedback}
      >
        Bad
      </Button>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
