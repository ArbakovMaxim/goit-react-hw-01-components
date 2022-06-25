import { Title } from 'components/Test2/TitleInfo/TitleInfo.styled';
import PropTypes from 'prop-types';

export const TitleInfo = ({ title }) => {
  return title.text ? <Title>{title.text}</Title> : false;
};

TitleInfo.propTypes = {
  text: PropTypes.string,
};
