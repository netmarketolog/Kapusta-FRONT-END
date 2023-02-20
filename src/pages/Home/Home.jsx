import { ChangeBalance } from 'components/ChangeBalance/ChangeBalance';
import { Summary } from 'components/Summary/Summary.jsx';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <ChangeBalance />
      <Summary />
      <Outlet />
    </main>
  );
};
export default Home;
