import { UserDescription } from 'Feature_Profile/UserDescription/UserDescription';
import { ProfileDescription } from 'Feature_Profile/ProfileDescription/ProfileDescription';
import user from '../../Mog/user.json';
import { ProfileUser } from './Profile.styled';
import { Conteiner } from 'components/Uai/Conteiner.styled';

export const Profile = () => {
  return (
    <Conteiner>
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
    </Conteiner>
  );
};
