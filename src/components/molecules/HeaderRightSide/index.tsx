import React from 'react';
import { Container } from './styles';
import { Contact, Search, Bag } from '../../atoms';

function HeaderRightSide() {
  return (
    <Container>
      <React.Fragment>
        <Contact />
        <Search />
        <Bag />
      </React.Fragment>
    </Container>
  );
}

export default HeaderRightSide;
