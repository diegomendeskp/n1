import React from 'react';
import { Container, ImgCard } from './styles';
import mario from '../../imgs/image6.jpg';
export function ModalImg() {
  return (
    <Container>
      <ImgCard src={mario} />
    </Container>
  );
}

export default ModalImg;
