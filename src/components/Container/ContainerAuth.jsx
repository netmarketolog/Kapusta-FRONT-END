import BgAuth from 'components/Bacground/BgAuth/BgAuth';
import BgUnAuth from 'components/Bacground/BgUnAuth/BgUnAuth';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Cont } from './Container.styled';

export const ContainerAuth = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Cont>
      {children}
      {isLoggedIn ? <BgAuth></BgAuth> : <BgUnAuth></BgUnAuth>}
    </Cont>
  );
};
