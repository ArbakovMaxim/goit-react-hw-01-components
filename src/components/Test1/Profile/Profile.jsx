import { UserDescription } from 'components/Test1/UserDescription/UserDescription';
import { ProfileDescription } from 'components/Test1/ProfileDescription/ProfileDescription';
import user from '../user.json';
import { ProfileUser } from './Profile.styled';

export const Profile = () => {
  return (
    <ProfileUser>
      <UserDescription
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <ProfileDescription
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </ProfileUser>
  );
};
