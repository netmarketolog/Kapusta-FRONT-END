import React from 'react';
import { Container, Image } from './BackGroundContainer.styled';

export const BackGround = ({ children }) => {
  return (
    <Image>
      <Container></Container>
      {children}
    </Image>
  );
};
