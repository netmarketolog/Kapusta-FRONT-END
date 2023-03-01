import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 195px;
  left: 50%;

  max-width: 280px;
  max-height: 152px;
  width: 100%;

  padding: 30px 25px;

  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  border-radius: 30px;
  box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);

  transform: translateX(-50%);

  @media screen and (min-width: 768px) {
    top: 160px;
    left: calc(50% - 100px);
    max-width: 288px;
  }

  @media screen and (min-width: 1280px) {
    left: calc(50% + 40px);

    padding: 30px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: -12px;
    left: 20%;

    border-left: 12px solid transparent;
    border-right: 12px solid transparent;
    border-bottom: 12px solid #1a2e5e;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;

  font-size: 14px;
  line-height: 1.43;
  color: #fff;
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.33;
  color: #fff;
`;
