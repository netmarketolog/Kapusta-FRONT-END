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
import { ExpensesAndIncome } from 'components/Reports/ExpensesAndIncome/ExpensesAndIncome';
import { CalendarReport } from 'components/Reports/Calendar/Calendar';

import { ContainerConfig } from './ReportPage.styled';
import { ButtonMain } from 'components/Buttons/ButtonMain';

const ReportPage = () => {
  // base
  const { statistics } = useSelector(selectReports);
  const { expense, income } = useSelector(selectReports);

  const [category, setCategory] = useState('');
  const [carrentCategory, setCarrentCategory] = useState(null);

  const [stats, setStats] = useState([]);
  const [report, setReport] = useState([]);

  const [operation, setOperation] = useState('expense');
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);

  const dispatch = useDispatch();
  const deadline = useSelector(selectTokenDeadline);

  useEffect(() => {
    (async function fetchData() {
      if (deadline) {
        if (Date.now() >= deadline) await dispatch(RefreshUser());
      }
      await dispatch(getReport({ operation, year, month }));
    })();
  }, [deadline, dispatch, month, operation, year]);

  useEffect(() => {
    if (!statistics || !statistics[0]) {
      setReport([]);
      return;
    }
    const arr = statistics.map(it => {
      return { name: it._id, total: it.total };
    });
    setReport(arr);
  }, [statistics]);

  useEffect(() => {
    if (!statistics || !statistics[0]) return setStats([]);
    setCategory(carrentCategory ?? statistics[0]._id);
    const [data] = statistics.filter(item => item._id === category);
    setStats(data?.stats);
  }, [carrentCategory, category, statistics, operation]);

  const changeDate = op => {
    switch (op) {
      case 'inc':
        if (month - 1 < 1) {
          setMonth(12);
          setYear(year - 1);
          return;
        }
        setMonth(month - 1);
        break;
      case 'dec':
        if (month + 1 > 12) {
          setMonth(1);
          setYear(year + 1);
          return;
        }
        setMonth(month + 1);
        break;
      default:
        return;
    }
  };

  const changeOperation = () => {
    operation === 'expense' ? setOperation('income') : setOperation('expense');
  };

  return (
    <ContainerAuth>
      <ContainerConfig>
        <ButtonMain />
        <CalendarReport month={month} year={year} changeDate={changeDate} />
        <ChangeBalance />
        {/* <div>тут могла бути ваша РЕКЛАМА )))</div> */}
      </ContainerConfig>
      {expense || income ? (
        <>
          <ExpensesIncomes />
          <ExpensesAndIncome
            report={report}
            changeOperation={changeOperation}
            setCategory={setCarrentCategory}
            operation={operation}
            category={category}
          />
          {stats && stats.length > 0 && <Diagram stats={stats} />}
        </>
      ) : (
        ''
      )}
    </ContainerAuth>
  );
};
export default ReportPage;
