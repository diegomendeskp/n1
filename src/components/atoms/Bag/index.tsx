import React from 'react';
import { Container, Icon } from './styles';
import icon from '../../icons/shopping-bag-solid.svg';
export function Bag() {
  return (
    <Container>
      <Icon src={icon} />
    </Container>
  );
}

export default Bag;
