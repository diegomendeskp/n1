import React from 'react';
import Cards from '../../atoms/Cards';
import { Container, P, Square, Div, ShopDiv } from './styles';
import square from '../../icons/Group6.svg';
import CyberPunk from '../../atoms/CyberPunk';
import DonkeyKong from '../../atoms/DonkeyKong';
import Outriders from '../../atoms/Outriders';
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
      <ShopDiv>
        <Outriders />
        <CyberPunk />
        <DonkeyKong />
      </ShopDiv>
    </Container>
  );
}

export default ContrastCard;
