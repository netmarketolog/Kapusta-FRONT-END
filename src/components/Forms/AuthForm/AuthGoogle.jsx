import React from 'react';
import icon from '../../../images/icons/google-symbol.svg';
import { Google, Link, StyleG, TextForm } from './AuthGoogle.styled';

export const AuthGoogle = () => {
  return (
    <StyleG>
      <TextForm>You can log in with your Google Account:</TextForm>
      <Link href="https://www.google.com/">
        <svg width="18" height="18">
          <use href={icon} />
        </svg>
        <Google>Google</Google>
      </Link>
    </StyleG>
  );
};
