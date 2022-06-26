import { TransactionInfo } from '../TransactionInfo/TransactionInfo';
import transactions from '../../Mog/transactions.json';
import { Tabl, TablTitle, Tablth, Tabtr } from './TransactionHistory.styled';
import { Conteiner } from 'components/Uai/Conteiner.styled';

export const TransactionHistory = () => {
  return (
    <Conteiner>
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
    </Conteiner>
  );
};
