import PropTypes from 'prop-types';
import { StatisticList } from './Statistics.styled';
import { StatisticsItem } from 'components/StatisticsItem/StatisticsItem';

export const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <StatisticsItem rating={good} text="Good" />
      <StatisticsItem rating={neutral} text="Neutral" />
      <StatisticsItem rating={bad} text="Bad" />
      <StatisticsItem rating={total} text="Total" />
      <StatisticsItem
        rating={positivePercentage}
        text="Positive feedback"
        percent="%"
      />
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
