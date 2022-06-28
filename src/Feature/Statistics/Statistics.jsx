import { StatisticsExtensions } from './Statistics.styled';
import data from '../../mock/data.json';
import { TitleInfo } from 'Feature/Statistics/TitleInfo/TitleInfo';
import { StatList } from 'Feature/Statistics/StatList/StatList';
import { Conteiner } from 'components/Ui/Conteiner.styled';

export const Statistics = () => {
  return (
    <Conteiner>
      <StatisticsExtensions>
        <TitleInfo title="Upload stats" />
        <StatList events={data} />
      </StatisticsExtensions>
    </Conteiner>
  );
};
