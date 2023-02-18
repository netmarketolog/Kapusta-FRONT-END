import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
