import { Profile } from 'components/Test1/Profile/Profile';
import { Conteiner } from 'components/App/App.styled';
import { Statistics } from 'components/Test2/Statistics/Statistics';
import { FriendsList } from 'components/Test3/FriendList/FriendLists';
import { TransactionHistory } from 'components/Test4/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Conteiner>
      <Profile />
      <Statistics />
      <FriendsList />
      <TransactionHistory />
    </Conteiner>
  );
};
