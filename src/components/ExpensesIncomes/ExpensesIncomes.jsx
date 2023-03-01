import {
  Container,
  ExpIncContainer,
  IncСontainer,
  Title,
  Exp,
  Inc,
  ExpСontainer,
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
        <ExpСontainer>
          <Title>Expenses:</Title>
          {isLoading ? (
            LoaderBtn()
          ) : (
            <Exp>- {expense?.toLocaleString()} UAH.</Exp>
          )}
        </ExpСontainer>
        <IncСontainer>
          <Title>Income:</Title>
          {isLoading ? (
            LoaderBtn()
          ) : (
            <Inc>+ {income?.toLocaleString()} UAH.</Inc>
          )}
        </IncСontainer>
      </ExpIncContainer>
    </Container>
  );
};
