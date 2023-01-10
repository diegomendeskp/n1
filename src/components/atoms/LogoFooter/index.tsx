import React from 'react';
import { Container, Img } from './styles';
import logo from '../../icons/logo_header1.svg';
export function LogoFooter() {
  return (
    <Container>
      <Img src={logo} />
    </Container>
  );
}

export default LogoFooter;
