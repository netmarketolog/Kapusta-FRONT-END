import styled from 'styled-components';

export const Cont = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 286px;
  border-radius: 0 0 0 45px;
  background-color: #f2f5fc;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
    height: 526px;
  }
  @media screen and (min-width: 1280px) {
    height: 582px;
  }
`;
