import { ChangeBalance } from 'components/ChangeBalance/ChangeBalance';
import { Expenses } from 'components/Expenses/Expenses';
import { ContainerAuth } from 'components/Container/ContainerAuth';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <ContainerAuth>
      <main>
        <ChangeBalance />
        <Expenses/>
        <Outlet />
      </main>
    </ContainerAuth>

  );
};
export default Home;
