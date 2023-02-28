import BgUnAuth from 'components/Bacground/BgUnAuth/BgUnAuth';
import { Cont } from './Container.styled';
// import { Wrrapper } from './Wrapper.styled';

export const ContainerUnAuth = ({ children }) => (
  // <Wrrapper>
  <Cont>
    {children}
    <BgUnAuth></BgUnAuth>
  </Cont>
  // </Wrrapper>
);
