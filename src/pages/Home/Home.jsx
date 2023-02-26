import { ChangeBalance } from 'components/ChangeBalance/ChangeBalance';
import { Expenses } from 'components/Expenses/Expenses';
import { Summary } from 'components/Summary/Summary.jsx';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <ChangeBalance />
      <Expenses/>
      <Summary />
      <Outlet />
    </main>
  );
};
export default Home;
