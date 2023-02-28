import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  position: absolute;
  left: 50%;
  top: 86px;
  transform: translate(-50%, 0);
  z-index: 2;
  @media screen and (min-width: 768px) {
    top: 86px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row-reverse;
    align-items: center;
    left: 55%;
  }
`;
