import {
  ListProfile,
  InfoProfile,
  StatsName,
  StatsAmount,
} from './ProdileDescription.styled';

export const ProfileDescription = ({ stats }) => {
  return (
    <ListProfile>
      <InfoProfile>
        <StatsName>Followers </StatsName>
        <StatsAmount>{stats.followers}</StatsAmount>
      </InfoProfile>
      <InfoProfile>
        <StatsName>Views </StatsName>
        <StatsAmount>{stats.views}</StatsAmount>
      </InfoProfile>
      <InfoProfile>
        <StatsName>Likes </StatsName>
        <StatsAmount>{stats.likes}</StatsAmount>
      </InfoProfile>
    </ListProfile>
  );
};
