import { ChangeBalance } from 'components/ChangeBalance/ChangeBalance';
import { Expenses } from 'components/Expenses/Expenses';
import { ContainerAuth } from 'components/Container/ContainerAuth';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTransactions } from 'redux/transactions/transactionsOperations';
import { selectTokenDeadline } from 'redux/selectors';
import { RefreshUser } from 'redux/auth/authOperations';
import { useState } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  const deadline = useSelector(selectTokenDeadline);

  const [operation, setOperation] = useState('expense');

  useEffect(() => {
    (async function fetchData() {
      if (deadline) {
        if (Date.now() >= deadline) await dispatch(RefreshUser());
      }
      await dispatch(getTransactions({ operation }));
    })();
  }, [deadline, dispatch, operation]);

  return (
    <ContainerAuth>
      <main>
        <ChangeBalance />

        <Expenses operation={operation} setOperation={setOperation} />
        <Outlet />
      </main>
    </ContainerAuth>
  );
};
export default Home;
