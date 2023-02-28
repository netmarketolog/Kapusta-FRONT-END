import { arr } from 'components/Reports/Diagram/arr';
import { Diagram } from 'components/Reports/Diagram/Diagram';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getReport } from 'redux/transactions/transactionsOperations';
import { ExpensesIncomes } from '../../components/ExpensesIncomes/ExpensesIncomes';
import { ChangeBalance } from '../../components/ChangeBalance/ChangeBalance';
const ReportPage = () => {
  const dispatch = useDispatch();
  const operation = 'expense';
  const year = 2023;
  const month = 2;
  useEffect(() => {
    dispatch(getReport({ operation, year, month }));
    console.log('UseEffect!!!!!');
  }, [dispatch]);
  return (
    <>
      <ChangeBalance />
      <ExpensesIncomes stats={arr} />
      <Diagram stats={arr} />
    </>
  );
};
export default ReportPage;
