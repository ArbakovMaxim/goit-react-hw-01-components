import { StatisticsExtensions } from './Statistics.styled';
import data from '../data.json';
import { TitleInfo } from 'components/Test2/TitleInfo/TitleInfo';
import { StatList } from 'components/Test2/StatList/StatList';

export const Statistics = () => {
  return (
    <StatisticsExtensions>
      <TitleInfo title={data} />
      <StatList events={data} />
    </StatisticsExtensions>
  );
};
