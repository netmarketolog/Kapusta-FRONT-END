import { Link } from 'react-router-dom';
import logo from 'images/header/logo.svg';
import { HeaderStyled } from './Header.styled';
import { HeaderNav } from './Nav/HeaderNav';

export const Header = () => {
  return (
    <HeaderStyled>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <HeaderNav />
    </HeaderStyled>
  );
};
