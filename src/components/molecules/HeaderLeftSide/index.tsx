import React from 'react';
import { Container } from './styles';
import { LogoRush, Menu } from '../../atoms';

function HeaderLeftSide() {
  return (
    <Container>
      <Menu />
      <LogoRush />
    </Container>
  );
}

export default HeaderLeftSide;
