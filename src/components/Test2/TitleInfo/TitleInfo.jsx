import { Title } from 'components/Test2/TitleInfo/TitleInfo.styled';
import PropTypes from 'prop-types';

export const TitleInfo = ({ text }) => {
  return <Title>{text}</Title>;
};

TitleInfo.propTypes = {
  text: PropTypes.string,
};
