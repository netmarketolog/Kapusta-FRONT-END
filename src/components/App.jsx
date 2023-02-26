import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';

import { RefreshUser } from 'redux/auth/authOperations';

import { Header } from './Header/Header';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const ReportPage = lazy(() => import('../pages/Report/ReportPage'));
const AuthPage = lazy(() => import('../pages/Auth/Auth'));
const TestComponent = lazy(() =>
  import('components/TestComponent/TestComponent')
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RefreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={<PrivateRoute redirectTo="/auth" component={<Home />} />}
          />
          <Route path="/reports" element={<ReportPage />} />
          <Route
            path="auth"
            element={<RestrictedRoute component={<AuthPage />} />}
          />

          <Route path="test" element={<TestComponent />} />
        </Route>
      </Routes>
    </>
  );
};
