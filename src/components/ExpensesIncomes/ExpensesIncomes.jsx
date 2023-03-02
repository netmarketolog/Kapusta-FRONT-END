import {
  Container,
  ExpIncContainer,
  IncContainer,
  Title,
  Exp,
  Inc,
  ExpContainer,
} from './ExpensesIncomes.styled';
import { selectReports, selectIsLoading } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { LoaderBtn } from '../Loader/Loader';
export const ExpensesIncomes = () => {
  const { expense, income } = useSelector(selectReports);

  const isLoading = useSelector(selectIsLoading);
  return (
    <Container>
      <ExpIncContainer>
        <ExpContainer>
          <Title>Expenses:</Title>
          {isLoading ? (
            LoaderBtn()
          ) : (
            <Exp>- {expense?.toLocaleString() ?? 0} UAH.</Exp>
          )}
        </ExpContainer>
        <IncContainer>
          <Title>Income:</Title>
          {isLoading ? (
            LoaderBtn()
          ) : (
            <Inc>+ {income?.toLocaleString() ?? 0} UAH.</Inc>
          )}
        </IncContainer>
      </ExpIncContainer>
    </Container>
  );
};
