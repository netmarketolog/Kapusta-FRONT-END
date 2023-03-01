import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../../../images/icons/DeleteIconSvg.svg';
import { ModalAsk } from 'components/Modal/ModalAsk/ModalAsk';
import { deleteTransaction } from 'redux/transactions/transactionsOperations';

export const BasketBtn = ({ transactionId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();

  const handleModalOpen = id => {
    setModalOpen(true);
    setCurrentId(id);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDelete = evt => {
    const transactionId = currentId;
    dispatch(deleteTransaction({ transactionId }));
    setCurrentId(null);
    setModalOpen(false);
  };

  return (
    <>
      <span
        id={transactionId}
        onClick={() => handleModalOpen(transactionId)}
        style={{ cursor: 'pointer' }}
      >
        <DeleteIcon />
      </span>

      {modalOpen && (
        <ModalAsk
          onConfirm={handleDelete}
          onClose={handleModalClose}
          title="Are you sure?"
        />
      )}
    </>
  );
};
