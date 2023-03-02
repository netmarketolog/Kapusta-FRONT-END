import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectBalance } from 'redux/selectors';
import { ModalBackdrop, ModalContainer, Text, Title } from './ModalInfo.styled';

const modalRoot = document.querySelector('#modal-root');

export const ModalInfo = () => {
  const { pathname } = useLocation();
  const [showModal, setShowModal] = useState(true);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    if (balance === 0) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
  });

  const handleKeyDown = evt => {
    document.body.style.overflow = 'unset';
    if (evt.target === evt.currentTarget || evt.code === 'Escape') {
      setShowModal(false);
      document.body.style.overflow = 'unset';
      window.removeEventListener('click', handleKeyDown);
      window.removeEventListener('keydown', handleKeyDown);
    }
  };
  return createPortal(
    <>
      {balance !== 0 || pathname === '/reports' ? (
        <></>
      ) : (
        showModal && (
          <ModalBackdrop onClick={handleKeyDown}>
            <ModalContainer>
              <Title>
                Hello! To get started, enter the current balance of your
                account!
              </Title>
              <Text>You can't spend money until you have it :)</Text>
            </ModalContainer>
          </ModalBackdrop>
        )
      )}
    </>,
    modalRoot
  );
};
