import PropTypes from 'prop-types';
import { StatisticItem, Span } from './StatisticsItem.style';

export const StatisticsItem = ({ text, rating, percent }) => {
  return (
    <StatisticItem>
      {text}:
      <Span>
        {rating}
        {percent}
      </Span>
    </StatisticItem>
  );
};

StatisticsItem.propTypes = {
  text: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  percent: PropTypes.string,
};
