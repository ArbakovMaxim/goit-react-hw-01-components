import { Profile } from 'Feature/Profile/Profile';
import { Main } from './components/Ui/Main.styled';
import { Statistics } from 'Feature/Statistics/Statistics';
import { FriendsList } from 'Feature/FriendList/FriendList/FriendLists';
import { TransactionHistory } from 'Feature/TransactionHistory/TransactionHistory';

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
