import { Title } from 'Feature/Statistics/TitleInfo/TitleInfo.styled';
import PropTypes from 'prop-types';

export const TitleInfo = ({ title }) => {
  return title ? <Title>{title}</Title> : false;
};

TitleInfo.propTypes = {
  text: PropTypes.string,
};
