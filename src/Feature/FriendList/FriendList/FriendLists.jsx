import { Conteiner } from 'components/Ui/Conteiner.styled';
import friends from '../../../mock/friends.json';
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
            <Status status={friend.isOnline} />
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
