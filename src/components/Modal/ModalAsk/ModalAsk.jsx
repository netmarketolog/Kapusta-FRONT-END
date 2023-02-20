// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  BtnsContainer,
  CancelBtn,
  CloseBtn,
  ConfirmBtn,
  ModalBackdrop,
  ModalContainer,
  TitleText,
} from './ModalAsk.styled';
import CloseIconSvg from '../../../images/icons/CloseIconSvg.svg';

const modalRoot = document.querySelector('#modal-root');

export const ModalAsk = ({ onConfirm, onClose, title }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  });

  const handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <CloseBtn onClick={onClose} type="button">
          <svg width="12" height="12">
            <use href={`${CloseIconSvg}#close-icon`}></use>
          </svg>
        </CloseBtn>
        <TitleText>{title}</TitleText>
        <BtnsContainer>
          <ConfirmBtn onClick={onConfirm} type="button">
            Yes
          </ConfirmBtn>
          <CancelBtn onClick={onClose} type="button">
            No
          </CancelBtn>
        </BtnsContainer>
      </ModalContainer>
    </ModalBackdrop>,
    modalRoot
  );
};

// Modal.propTypes = {
//   onConfirm: PropTypes.func.isRequired,
//   onClose: PropTypes.func.isRequired,
//   title: PropTypes.string.isRequired,
// };
