import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 380px;
  padding: 50px 58px 60px;

  background-color: #fff;
  border-radius: 30px;
  box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);

  transform: translate(-50%, -50%);

  @media screen and (max-width: 420px) {
    width: 280px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  transition: 250ms;

  :hover {
    transform: scale(1.2);
  }
`;

export const TitleText = styled.p`
  margin-bottom: 20px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;

  color: #2e2f30;
`;

export const BtnsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ConfirmBtn = styled.button`
  width: 125px;
  height: 44px;

  border: none;
  border-radius: 16px;
  cursor: pointer;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #fff;
  background-color: #ff751d;

  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 420px) {
    width: 75px;
  }
`;

export const CancelBtn = styled.button`
  width: 125px;
  height: 44px;

  border: 2px solid #f5f6fb;
  border-radius: 16px;
  cursor: pointer;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;

  color: #52555f;
  background-color: #fff;

  transition-property: background-color, transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #f5f6fb;
    transform: scale(1.1);
  }

  @media screen and (max-width: 420px) {
    width: 75px;
  }
`;
