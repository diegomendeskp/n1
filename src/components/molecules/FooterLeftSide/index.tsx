import React from 'react';
import { Container } from './styles';
import { LogoFooter } from '../../atoms';

function FooterLeftSide() {
  return (
    <Container>
      <React.Fragment>
        <LogoFooter />
      </React.Fragment>
    </Container>
  );
}

export default FooterLeftSide;
