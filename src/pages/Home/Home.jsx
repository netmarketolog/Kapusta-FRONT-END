import { ChangeBalance } from 'components/ChangeBalance/ChangeBalance';
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <ChangeBalance />
      <Outlet />
    </main>
  );
};
export default Home;
