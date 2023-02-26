import { ChangeBalance } from 'components/ChangeBalance/ChangeBalance';
import { Expenses } from 'components/Expenses/Expenses';
import { ContainerAuth } from 'components/Container/ContainerAuth';
import { Summary } from 'components/Summary/Summary.jsx';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <ContainerAuth>
      <main>
        <ChangeBalance />
        <Expenses/>
        <Summary />
        <Outlet />
      </main>
    </ContainerAuth>

  );
};
export default Home;
