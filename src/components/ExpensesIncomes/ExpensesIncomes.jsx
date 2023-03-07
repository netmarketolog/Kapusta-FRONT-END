import {
  Container,
  ExpIncContainer,
  IncContainer,
  Title,
  ExpInc,
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
            <ExpInc>- {expense?.toLocaleString() ?? 0} UAH.</ExpInc>
          )}
        </ExpContainer>
        <IncContainer>
          <Title>Income:</Title>
          {isLoading ? (
            LoaderBtn()
          ) : (
            <ExpInc>+ {income?.toLocaleString() ?? 0} UAH.</ExpInc>
          )}
        </IncContainer>
      </ExpIncContainer>
    </Container>
  );
};
