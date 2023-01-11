import React from 'react';
import { P } from '../../molecules/ContrastCard/styles';
import { Container, ImgCard, Div, Text, Line } from './styles';
import zelda from '../../imgs/zelda_banner.jpg';
import sekiro from '../../imgs/sekiro_banner.jpg';

export function Cards() {
  return (
    <Container>
      <Div>
        <ImgCard src={zelda} />
        <Line />
        <Text>The Legend of Zelda - Breath of th wild</Text>
      </Div>
      <Div>
        <ImgCard src={sekiro} />
        <Line />
        <Text>SEKIRO - Shadows die twice</Text>
      </Div>
    </Container>
  );
}

export default Cards;
