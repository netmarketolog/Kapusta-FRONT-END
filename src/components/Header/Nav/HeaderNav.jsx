import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectTokenDeadline,
  selectEmail,
} from 'redux/selectors';

import logoutImg from 'images/header/logout.svg';

import { ModalAsk } from 'components/Modal/ModalAsk/ModalAsk';
import { logOut, RefreshUser } from 'redux/auth/authOperations';

import {
  AuthNavContainer,
  UserAvatar,
  UserEmail,
  LogoutImg,
  VerticalLine,
  ExitButton,
} from './HeaderNav.styled';

export const HeaderNav = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const email = useSelector(selectEmail);

  const toggleModal = () => {
    setModalOpen(prevState => !prevState);
  };

  const deadline = useSelector(selectTokenDeadline);

  const handleClick = async () => {
    if (deadline) {
      if (Date.now() >= deadline) await dispatch(RefreshUser());
    }
    await dispatch(logOut());
    toggleModal();
  };

  return (
    isLoggedIn && (
      <>
        <AuthNavContainer>
          <UserAvatar>U</UserAvatar>
          <UserEmail>{email}</UserEmail>
          <LogoutImg src={logoutImg} alt="logout" onClick={toggleModal} />
          <VerticalLine></VerticalLine>
          <ExitButton type="button" onClick={toggleModal}>
            Exit
          </ExitButton>
        </AuthNavContainer>
        {modalOpen && (
          <ModalAsk
            onConfirm={handleClick}
            onClose={toggleModal}
            title="Do you really want to leave?"
          />
        )}
      </>
    )
  );
};
