import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as DeleteIcon } from '../../../images/icons/DeleteIconSvg.svg';
import { ModalAsk } from 'components/Modal/ModalAsk/ModalAsk';
import { deleteTransaction } from 'redux/transactions/transactionsOperations';
import { RefreshUser } from 'redux/auth/authOperations';
import { selectTokenDeadline } from 'redux/selectors';

export const BasketBtn = ({ transactionId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const deadline = useSelector(selectTokenDeadline);

  const dispatch = useDispatch();

  const handleModalOpen = id => {
    setModalOpen(true);
    setCurrentId(id);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleDelete = async () => {
    const transactionId = currentId;
    if (deadline) {
      if (Date.now() >= deadline) await dispatch(RefreshUser());
    }
    await dispatch(deleteTransaction({ transactionId }));
    await dispatch(RefreshUser());
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
