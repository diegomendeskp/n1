import React from 'react';
import FooterLeftSide from '../../molecules/FooterLeftSide';
import FooterRightSide from '../../molecules/FooterRightSide';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      <FooterLeftSide />

      <FooterRightSide />
    </Container>
  );
}

export default Footer;
