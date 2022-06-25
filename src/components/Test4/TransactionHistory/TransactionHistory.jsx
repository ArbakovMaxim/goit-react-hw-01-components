import { TransactionInfo } from '../TransactionInfo/TransactionInfo';
import transactions from '../transactions.json';
import { Tabl, TablTitle, Tablth, Tabtr } from './TransactionHistory.styled';

export const TransactionHistory = () => {
  return (
    <Tabl>
      <Tablth>
        <Tabtr>
          <TablTitle>Type</TablTitle>
          <TablTitle>Amount</TablTitle>
          <TablTitle>Currency</TablTitle>
        </Tabtr>
      </Tablth>
      <TransactionInfo items={transactions} />
    </Tabl>
  );
};
