import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalContainer, Text, Title } from './ModalInfo.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalInfo = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
  });

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      setShowModal(false);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    }
  };

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      setShowModal(false);
    }
  };

  return createPortal(
    showModal && (
      <ModalBackdrop onClick={handleBackdropClick}>
        <ModalContainer>
          <Title>
            Hello! To get started, enter the current balance of your account!
          </Title>
          <Text>You can't spend money until you have it :)</Text>
        </ModalContainer>
      </ModalBackdrop>
    ),
    modalRoot
  );
};
