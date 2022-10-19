import PropTypes from 'prop-types';
import { SectionElement } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <SectionElement>
      <h2>{title}</h2>
      {children}
    </SectionElement>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
