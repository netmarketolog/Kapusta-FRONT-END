import Home from 'pages/Home/Home';

import { Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';
import { TestComponent } from './TestComponent/TestComponent';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/test" element={<TestComponent />}></Route>
      </Routes>
    </>
  );
};
