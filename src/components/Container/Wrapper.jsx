import BgAuth from 'components/Bacground/BgAuth/BgAuth';
import { Cont } from './Container.styled';

export const Wrrapper = ({ children }) => {
  return (
    <Wrrapper>
      <Cont>
        {children}
        <BgAuth></BgAuth>
      </Cont>
    </Wrrapper>
  );
};
