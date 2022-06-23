/* import PropTypes from 'prop-types'; */

import { StatInfo, Item, Label, Percentage } from './StatList.styled';

export const StatList = ({ events }) => {
  return (
    <StatInfo>
      {events.map(event => (
        <Item key={event.id} style={{ backgroundColor: color() }}>
          <Label>{event.label}</Label>
          <Percentage>{event.percentage}%</Percentage>
        </Item>
      ))}
    </StatInfo>
  );
};

function color() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}

/* StatList.propTypes = {
    id.PropTypes.string,
}; */
