import { Link, Outlet } from 'react-router-dom';
import logo from 'images/header/logo.svg';
import { HeaderStyled } from './Header.styled';
import { HeaderNav } from './Nav/HeaderNav';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

export const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <HeaderNav />
      </HeaderStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
