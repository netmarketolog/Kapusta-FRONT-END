import { ContainerUnAuth } from 'components/Container/ContainerUnAuth';
import { HomePages } from 'components/Home/HomePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { googleUser } from 'redux/auth/authOperations';

const AuthPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    if (accessToken) {
      dispatch(googleUser({ accessToken }));
    }
  }, [dispatch, searchParams]);

  return (
    <ContainerUnAuth>
      <HomePages></HomePages>
    </ContainerUnAuth>
  );
};
export default AuthPage;
