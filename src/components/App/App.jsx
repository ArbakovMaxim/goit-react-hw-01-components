import { Profile } from 'components/Test1/Profile/Profile';
import { Conteiner } from 'components/App/App.styled';
import { Statistics } from 'components/Test2/Statistics/Statistics';

export const App = () => {
  return (
    <Conteiner>
      <Profile />
      <Statistics />
    </Conteiner>
  );
};
