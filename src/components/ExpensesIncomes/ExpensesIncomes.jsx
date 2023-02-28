import {
  Container,
  ExpIncContainer,
  IncСontainer,
  Title,
  Exp,
  Inc,
  ExpСontainer,
} from './ExpensesIncomes.styled';
export const ExpensesIncomes = () => {
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
