import PropTypes from 'prop-types';
import { getColor } from 'utils/getColor';

import { StatInfo, Item, Label, Percentage } from './StatList.styled';

export const StatList = ({ events }) => {
  return (
    <StatInfo>
      {events.map(event => (
        <Item key={event.id} style={{ backgroundColor: getColor() }}>
          <Label>{event.label}</Label>
          <Percentage>{event.percentage}%</Percentage>
        </Item>
      ))}
    </StatInfo>
  );
};

StatList.propTypes = {
  events: PropTypes.array.isRequired,
};
