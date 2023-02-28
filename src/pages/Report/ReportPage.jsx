import { arr } from 'components/Reports/Diagram/arr';
import { Diagram } from 'components/Reports/Diagram/Diagram';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshUser } from 'redux/auth/authOperations';
import { selectTokenDeadline } from 'redux/selectors';
import { getReport } from 'redux/transactions/transactionsOperations';
import { ExpensesIncomes } from '../../components/ExpensesIncomes/ExpensesIncomes';
import { ChangeBalance } from '../../components/ChangeBalance/ChangeBalance';
const ReportPage = () => {
  const dispatch = useDispatch();
  const deadline = useSelector(selectTokenDeadline);
  const operation = 'expense';
  const year = 2023;
  const month = 2;

  useEffect(() => {
    (async function fetchData() {
      if (deadline) {
        if (Date.now() >= deadline) await dispatch(RefreshUser());
      }
      await dispatch(getReport({ operation, year, month }));
    })();

    console.log('UseEffect in Report.js!!!!!');
  }, [deadline, dispatch]);

  return (
    <>
      <ChangeBalance />
      <ExpensesIncomes stats={arr} />
      <Diagram stats={arr} />
    </>
  );
};
export default ReportPage;
