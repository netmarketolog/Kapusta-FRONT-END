import BgAuth from 'components/Bacground/BgAuth/BgAuth';
import { Cont } from './Container.styled';

export const ContainerAuth = ({ children }) => (
  <Cont>
    {children}
    <BgAuth></BgAuth>
  </Cont>
);
