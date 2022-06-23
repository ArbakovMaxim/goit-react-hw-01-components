import { UserDescription } from 'components/UserDescription/UserDescription';
import { ProfileDescription } from 'components/ProfileDescription/ProfileDescription';
import user from '../../user.json';
import { ProfileUser } from './Profile.styled';

export const Profile = events => {
  console.log(events);
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
