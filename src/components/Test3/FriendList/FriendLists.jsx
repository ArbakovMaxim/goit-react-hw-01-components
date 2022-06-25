import friends from '../friends.json';
import {
  FriendList,
  FriendListItem,
  StatusOnline,
  StatusOffline,
  Avatar,
  Name,
} from './FriendsList.styled';

export const FriendsList = () => {
  return (
    <FriendList>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          {friend.isOnline ? (
            <StatusOnline></StatusOnline>
          ) : (
            <StatusOffline></StatusOffline>
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
  );
};
