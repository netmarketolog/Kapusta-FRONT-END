import HeroTitle from 'components/HeroTitle/HeroTitle';

import BgUnAuth from '../Bacground/BgUnAuth/BgUnAuth';
import { Cont } from './Container.styled';
// import BgAuth from '../Bacground/BgAuth/BgAuth';

export const Container = ({ children }) => (
  <Cont>
    {children}
    <HeroTitle></HeroTitle>
    <BgUnAuth></BgUnAuth>
  </Cont>
);
