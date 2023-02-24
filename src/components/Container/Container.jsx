import { BackGround } from './BackGroundContainer';
import { Cont } from './Container.styled';

export const Container = ({ children }) => (
  <BackGround>
    <Cont>{children}</Cont>
  </BackGround>
);
