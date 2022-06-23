import {
  UserInfo,
  ImgInfo,
  UserName,
  UserTag,
  UserLocation,
} from './UserDescription.styled';
import PropTypes from 'prop-types';

export const UserDescription = ({ avatar, username, tag, location }) => {
  return (
    <UserInfo>
      <ImgInfo src={avatar} alt="User avatar" />
      <UserName>{username}</UserName>
      <UserTag>@{tag}</UserTag>
      <UserLocation>{location}</UserLocation>
    </UserInfo>
  );
};

UserDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
