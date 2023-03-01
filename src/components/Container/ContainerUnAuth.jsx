import { Bg } from 'components/Bacground/Bg';
import BgUnAuth from 'components/Bacground/BgUnAuth/BgUnAuth';
import { Cont } from './Container.styled';

export const ContainerUnAuth = ({ children }) => (
  <Cont>
    <Bg></Bg>
    <BgUnAuth></BgUnAuth>
    {children}
  </Cont>
);
