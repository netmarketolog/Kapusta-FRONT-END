import React from 'react';
import { Link, StyleG, TextForm } from './AuthGoogle.styled';
import { ReactComponent as Icon } from '../../../images/icons/Google.svg';

export const AuthGoogle = () => {
  return (
    <StyleG>
      <TextForm>You can log in with your Google Account:</TextForm>

      <Link href="https://www.google.com/">
        <Icon />
      </Link>
    </StyleG>
  );
};
