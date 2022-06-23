import { Item, Label, Percentage } from './StatItem.styled';

export const Items = (id, label, percentage) => {
  return (
    <Item key={id} style={{ backgroundColor: color() }}>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </Item>
  );
};

function color() {
  return (
    '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
  );
}
