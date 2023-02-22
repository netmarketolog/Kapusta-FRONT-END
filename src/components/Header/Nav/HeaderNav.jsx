import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/selectors';

import logoutImg from 'images/header/logout.svg';

import { ModalAsk } from 'components/Modal/ModalAsk/ModalAsk';
import { logOut } from 'redux/auth/authOperations';

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
  // const userEmail = useSelector(selectUser);

  const toggleModal = () => {
    setModalOpen(prevState => !prevState);
  };

  const handleClick = () => {
    dispatch(logOut());
    toggleModal();
  };

  return (
    isLoggedIn && (
      <>
        <AuthNavContainer>
          <UserAvatar>U</UserAvatar>
          <UserEmail>EmailUser</UserEmail>
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
