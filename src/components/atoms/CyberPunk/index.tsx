import React, { useState } from 'react';
import styled from 'styled-components';
import { useModalContext } from '../../../context';
import mario from '../../imgs/image_6-removebg-preview 1.png';
import cyberpunk2077 from '../../imgs/product-cyberpunk2077.jpg';

import {
  Container,
  CardItem,
  Img,
  Name,
  Price,
  Button,
  Mario,
  SecundaryButton,
  ProductInfo,
} from './styles';

export function CyberPunk() {
  const { toggleModal } = useModalContext();

  const [isBought, setIsBought] = useState(false);
  const buyItem = () => {
    toggleModal(true);
    setIsBought(true);
  };

  return (
    <Container>
      <CardItem>
        <Img src={cyberpunk2077} />

        <ProductInfo>
          <Name>CYBERPUNK 2077</Name>
          <Price>R$ 200,00</Price>
        </ProductInfo>
        {isBought ? (
          <SecundaryButton>comprado!</SecundaryButton>
        ) : (
          <Button onClick={buyItem}>comprar</Button>
        )}
        {isBought ? <Mario src={mario} /> : null}
      </CardItem>
    </Container>
  );
}

export default CyberPunk;
