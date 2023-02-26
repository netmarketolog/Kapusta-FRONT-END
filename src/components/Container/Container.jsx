// import BgAuth from '../Bacground/BgAuth/BgAuth';
import HeroTitle from 'components/HeroTitle/HeroTitle';
import { Cont } from './Container.styled';
import BgUnAuth from 'components/Bacground/BgUnAuth/BgUnAuth';

export const Container = ({ children }) => (
  <Cont>
    {children}
    <HeroTitle></HeroTitle>
    <BgUnAuth></BgUnAuth>
  </Cont>
);
