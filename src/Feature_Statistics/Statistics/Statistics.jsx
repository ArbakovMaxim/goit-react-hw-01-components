import { StatisticsExtensions } from './Statistics.styled';
import data from '../../Mog/data.json';
import { TitleInfo } from 'Feature_Statistics/TitleInfo/TitleInfo';
import { StatList } from 'Feature_Statistics/StatList/StatList';
import { Conteiner } from 'components/Uai/Conteiner.styled';

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
