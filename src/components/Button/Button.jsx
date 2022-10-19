import PropTypes from 'prop-types';

import { Btn } from './Button.styled';

export const Button = ({ type, children, onLeaveFeedback, name, value }) => {
  return (
    <Btn name={name} type={type} onClick={onLeaveFeedback} value={value}>
      {children}
    </Btn>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
