import {
  ListProfile,
  InfoProfile,
  StatsName,
  StatsAmount,
} from './ProdileDescription.styled';
import PropTypes from 'prop-types';

export const ProfileDescription = ({ followers, views, likes }) => {
  return (
    <ListProfile>
      <InfoProfile>
        <StatsName>Followers </StatsName>
        <StatsAmount>{followers}</StatsAmount>
      </InfoProfile>
      <InfoProfile>
        <StatsName>Views </StatsName>
        <StatsAmount>{views}</StatsAmount>
      </InfoProfile>
      <InfoProfile>
        <StatsName>Likes </StatsName>
        <StatsAmount>{likes}</StatsAmount>
      </InfoProfile>
    </ListProfile>
  );
};

ProfileDescription.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
