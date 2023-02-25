import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

import { Header } from './Header/Header';
import Home from 'pages/Home/Home';
import { ReportPage } from 'pages/Report/ReportPage';
import { AuthPage } from 'pages/Auth/Auth';
import { RefreshUser } from 'redux/auth/authOperations';
import { TestComponent } from './TestComponent/TestComponent';

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
          <Route
            path="reports"
            element={
              <PrivateRoute redirectTo="/auth" component={<ReportPage />} />
            }
          />
          <Route
            path="/auth"
            element={<RestrictedRoute component={<AuthPage />} />}
          />

          <Route
            path="/test"
            element={<RestrictedRoute component={<TestComponent />} />}
          />
        </Route>
      </Routes>
    </>
  );
};
