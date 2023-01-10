import React from 'react';
import { Container } from './styles';
import HeaderLeftSide from '../../molecules/HeaderLeftSide';
import HeaderRightSide from '../../molecules/HeaderRightSide';

function Header() {
  return (
    <Container>
      <HeaderLeftSide />
      <HeaderRightSide />
    </Container>
  );
}

export default Header;
