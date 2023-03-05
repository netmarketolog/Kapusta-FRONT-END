import { ContainerAuth } from 'components/Container/ContainerAuth';
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
    const refreshToken = searchParams.get('refreshToken');
    const expiresIn = searchParams.get('expiresIn');
    if (accessToken) {
      dispatch(googleUser({ accessToken, refreshToken, expiresIn }));
    }
  }, [dispatch, searchParams]);

  return (
    <ContainerAuth>
      <HomePages></HomePages>
    </ContainerAuth>
  );
};
export default AuthPage;
