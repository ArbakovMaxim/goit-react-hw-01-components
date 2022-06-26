import { Profile } from 'Feature_Profile/Profile/Profile';
import { Main } from 'App/App.styled';
import { Statistics } from 'Feature_Statistics/Statistics/Statistics';
import { FriendsList } from 'Feature_FriendList/FriendList/FriendLists';
import { TransactionHistory } from 'Feature_TransactionHistory/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Main>
      <Profile />
      <Statistics />
      <FriendsList />
      <TransactionHistory />
    </Main>
  );
};
