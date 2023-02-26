import BgAuth from 'components/Bacground/BgAuth/BgAuth';
import { Cont } from './Container.styled';
// import BgUnAuth from 'components/Bacground/BgUnAuth/BgUnAuth';

export const ContainerAuth = ({ children }) => (
  <Cont>
    {children}
    <BgAuth></BgAuth>
  </Cont>
);
