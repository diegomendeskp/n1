import React from 'react';
import { Container } from './styles';
import { LogoRush, NavMenu } from '../../atoms';

function HeaderLeftSide() {
  return (
    <Container>
      <NavMenu />
      <LogoRush />
    </Container>
  );
}

export default HeaderLeftSide;
