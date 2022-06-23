import { UserDescription } from 'components/UserDescription/UserDescription';
import { ProfileDescription } from 'components/ProfileDescription/ProfileDescription';
import upcomingEvents from '../../user.json';

export const Profile = () => {
  return (
    <div className="profile">
      <UserDescription events={upcomingEvents} />
      <ProfileDescription events={upcomingEvents} />
    </div>
  );
};
