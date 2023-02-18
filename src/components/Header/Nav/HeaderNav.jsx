// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { selectIsLoggedIn, selectUserEmail } from 'redux/selectors';
// import  logOut  from '';

import logoutImg from 'images/header/logout.svg';

// import Modal from '';

import {
  AuthNavContainer,
  UserAvatar,
  UserEmail,
  LogoutImg,
  VerticalLine,
  ExitButton,
} from './HeaderNav.styled';

export const HeaderNav = () => {
  //   const [modalOpen, setModalOpen] = useState(false);
  //   const dispatch = useDispatch();
  //   const isLoggedIn = useSelector(selectIsLoggedIn);
  //   const userEmail = useSelector(selectUserEmail);

  // const handleClick = () => {
  //    dispatch(logOut());
  // };

  //   const toggleModal = () => {
  // setModalOpen(prevState => !prevState);
  //   };

  return (
    // isLoggedIn && (
    <>
      <AuthNavContainer>
        <UserAvatar>U</UserAvatar>
        <UserEmail>UserEmail</UserEmail>
        <LogoutImg src={logoutImg} alt="logout" />
        <VerticalLine></VerticalLine>
        <ExitButton type="button">Exit</ExitButton>
      </AuthNavContainer>
      {/* {modalOpen && (
        <Modal
          closeModal={toggleModal}
          // dispatch={handleClick}
        >
          Do you really want to leave?
        </Modal>
      )} */}
    </>
  );
  //   );
};
