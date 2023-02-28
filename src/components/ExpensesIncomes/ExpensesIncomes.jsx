import {
  Container,
  ExpIncContainer,
  IncСontainer,
  Title,
  Exp,
  Inc,
  ExpСontainer,
} from './ExpensesIncomes';
// import { patchTransactions } from '../../redux/transaction/transactionOperation';
export const ExpensesIncomes = () => {
  // console.log(patchTransactions());
  return (
    <Container>
      <ExpIncContainer>
        <ExpСontainer>
          <Title>Expenses:</Title>
          <Exp>- 18 000.00 UAH.</Exp>
        </ExpСontainer>
        <IncСontainer>
          <Title>Income:</Title>
          <Inc>+ 45 000.00 UAH.</Inc>
        </IncСontainer>
      </ExpIncContainer>
    </Container>
  );
};
