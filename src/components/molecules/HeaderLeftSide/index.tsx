import React from 'react';
import { Container } from './styles';
import { LogoRush, Menu } from '../../atoms';

function HeaderLeftSide() {
  return (
    <Container>
      <React.Fragment>
        <Menu />
        <LogoRush />
      </React.Fragment>
    </Container>
  );
}

export default HeaderLeftSide;
