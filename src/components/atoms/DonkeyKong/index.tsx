import React, { useState } from 'react';
import styled from 'styled-components';
import { useModalContext } from '../../../context';
import mario from '../../imgs/image_6-removebg-preview 1.png';
import donkeyKong from '../../imgs/product-donkey-kong.jpg';

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

export function DonkeyKong() {
  const { toggleModal } = useModalContext();

  const [isBought, setIsBought] = useState(false);
  const buyItem = () => {
    toggleModal(true);
    setIsBought(true);
  };

  return (
    <Container>
      <CardItem>
        <Img src={donkeyKong} />

        <ProductInfo>
          <Name>Donkey Kong Countru Tropical Freeze</Name>
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

export default DonkeyKong;
