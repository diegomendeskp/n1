import React from 'react';
import Cards from '../../atoms/Cards';
import { Container, P, Square, Div, ShopDiv } from './styles';
import square from '../../icons/Group6.svg';
function ContrastCard() {
  return (
    <Container>
      <Div>
        <Cards />
      </Div>
      <P>
        <Square src={square} />
        Produtos em Destaque
      </P>
      <ShopDiv></ShopDiv>
    </Container>
  );
}

export default ContrastCard;
