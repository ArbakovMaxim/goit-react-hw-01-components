import {
  UserInfo,
  ImgInfo,
  UserName,
  UserTag,
  UserLocation,
} from './UserDescription.styled';

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
