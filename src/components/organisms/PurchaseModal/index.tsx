import React, { useState } from 'react';
import Modal from 'react-modal';
import ModalCard from '../../molecules/ModalCard';
import { customStyles } from './styles';
import { useModalContext } from '../../../context';

export function PurchaseModal() {
  const { isOpen } = useModalContext();
  const { autoToggleModal } = useModalContext();
  const { toggleModal } = useModalContext();
  return (
    <Modal
      onAfterOpen={autoToggleModal}
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={toggleModal}
      style={customStyles}
      contentLabel="Modal de Compra Finalizada"
    >
      <ModalCard />
    </Modal>
  );
}

export default PurchaseModal;
