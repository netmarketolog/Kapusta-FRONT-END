import { ChangeBalance } from 'components/ChangeBalance/ChangeBalance';
import { Expenses } from 'components/Expenses/Expenses';
import { ContainerAuth } from 'components/Container/ContainerAuth';
import { Summary } from 'components/Summary/Summary.jsx';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTransactions } from 'redux/transactions/transactionsOperations';
import { selectOperationType } from 'redux/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const operation = useSelector(selectOperationType);

  useEffect(() => {
    dispatch(getTransactions({ operation }));
    console.log('UseEffect!!!!!');
  }, [dispatch, operation]);
  return (
    <ContainerAuth>
      <main>
        <ChangeBalance />
        <Expenses />
        <Summary />
        <Outlet />
      </main>
    </ContainerAuth>
  );
};
export default Home;
