// import { arr } from 'components/Reports/Diagram/arr';
import { Diagram } from 'components/Reports/Diagram/Diagram';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RefreshUser } from 'redux/auth/authOperations';
import { selectReports, selectTokenDeadline } from 'redux/selectors';
import { getReport } from 'redux/transactions/transactionsOperations';
import { ExpensesIncomes } from '../../components/ExpensesIncomes/ExpensesIncomes';
import { ChangeBalance } from '../../components/ChangeBalance/ChangeBalance';
import { ContainerAuth } from 'components/Container/ContainerAuth';

const ReportPage = () => {
  const { statistics } = useSelector(selectReports);

  const [category, setCategory] = useState('');
  const [stats, setStats] = useState([]);
  const [operation, setOperation] = useState('expense');
  const [year, setYear] = useState(2023); // 2023 заменить на переменную текщий год
  const [month, setMonth] = useState(2); // 2 заменить на переменную текущий месяц

  const dispatch = useDispatch();
  const deadline = useSelector(selectTokenDeadline);

  useEffect(() => {
    (async function fetchData() {
      if (deadline) {
        if (Date.now() >= deadline) await dispatch(RefreshUser());
      }
      await dispatch(getReport({ operation, year, month }));
    })();
    console.log('UseEffect in Report.js!!!!!');
  }, [deadline, dispatch, month, operation, year]);

  useEffect(() => {
    if (!statistics || !statistics[0]) return;
    setCategory(statistics[0]._id);
    const [data] = statistics.filter(item => item._id === category);
    setStats(data?.stats);
  }, [category, statistics]);

  return (
    <ContainerAuth>
      <ChangeBalance />
      <ExpensesIncomes />
      {stats && stats.length > 0 && <Diagram stats={stats} />}
    </ContainerAuth>
  );
};
export default ReportPage;
