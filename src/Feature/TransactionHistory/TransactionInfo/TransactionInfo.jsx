import { TablItem } from './TransactionInfo.styled.js';
import PropTypes from 'prop-types';

export const TransactionInfo = ({ items }) => {
  return (
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <TablItem>{item.type}</TablItem>
          <TablItem>{item.amount}</TablItem>
          <TablItem>{item.currency}</TablItem>
        </tr>
      ))}
    </tbody>
  );
};

TransactionInfo.propTypes = {
  items: PropTypes.array.isRequired,
};
