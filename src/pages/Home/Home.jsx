import { ChangeBalance } from 'components/ChangeBalance/ChangeBalance';
import { Expenses } from 'components/Expenses/Expenses';
import { ContainerAuth } from 'components/Container/ContainerAuth';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getTransactions } from 'redux/transactions/transactionsOperations';

const Home = () => {
  const dispatch = useDispatch();
  const operation = 'income';

  useEffect(() => {
    dispatch(getTransactions({ operation }));
    console.log('UseEffect!!!!!');
  }, [dispatch]);
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
