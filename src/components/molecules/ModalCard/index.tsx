import React from 'react';
import { Container, P, Icon, Line, Button } from './styles';
import { ModalImg } from '../../atoms/';
import { useModalContext } from '../../../context';
import closed from '../../icons/closebtn.svg';
function ModalCard() {
  const { toggleModal } = useModalContext();
  const CloseModal = () => {
    toggleModal(false);
  };
  return (
    <Container>
      <Button onClick={CloseModal}>
        <img src={closed} />
      </Button>
      <P>Pedido realizado com sucesso!</P>
      <Icon>
        <Line />
        <ModalImg />
      </Icon>
    </Container>
  );
}

export default ModalCard;
