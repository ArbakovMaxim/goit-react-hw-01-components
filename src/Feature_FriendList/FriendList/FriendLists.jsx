import { Conteiner } from 'components/Uai/Conteiner.styled';
import friends from '../../Mog/friends.json';
import {
  FriendList,
  FriendListItem,
  Status,
  Avatar,
  Name,
} from './FriendsList.styled';

export const FriendsList = () => {
  return (
    <Conteiner>
      <FriendList>
        {friends.map(friend => (
          <FriendListItem key={friend.id}>
            {friend.isOnline ? (
              <Status style={{ backgroundColor: '#0f0' }} />
            ) : (
              <Status style={{ backgroundColor: '#f00' }} />
            )}
            <Avatar
              src={friend.avatar}
              alt="User avatar"
              width="48"
              height="48"
            />
            <Name>{friend.name}</Name>
          </FriendListItem>
        ))}
      </FriendList>
    </Conteiner>
  );
};
