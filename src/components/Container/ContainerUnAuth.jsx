import BgUnAuth from 'components/Bacground/BgUnAuth/BgUnAuth';
import { Cont } from './Container.styled';

export const ContainerUnAuth = ({ children }) => (
  <Cont>
    {children}
    <BgUnAuth></BgUnAuth>
  </Cont>
);
