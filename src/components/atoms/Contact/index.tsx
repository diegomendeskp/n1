import React from 'react';
import icon from '../../icons/paper-plane.svg';
import { Container, Icon, P } from './styles';

export function Contact() {
  return (
    <Container>
      <Icon src={icon} />
      <P>CONTATO</P>
    </Container>
  );
}

export default Contact;
