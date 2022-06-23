import { UserDescription } from 'components/UserDescription/UserDescription';
import { ProfileDescription } from 'components/ProfileDescription/ProfileDescription';
import user from '../../user.json';
import { ProfileUser } from './Profile.styled';
import PropTypes from 'prop-types';

export const Profile = () => {
  return (
    <ProfileUser>
      <UserDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ProfileDescription stats={user.stats} />
    </ProfileUser>
  );
};

user.PropTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
