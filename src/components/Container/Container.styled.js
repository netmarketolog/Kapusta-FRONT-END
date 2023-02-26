import styled from 'styled-components';

export const Cont = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 286px;
  border-radius: 0 0 0 45px;
  background-color: #f2f5fc;
  @media screen and (min-width: 768px) {
    align-items: stretch;
    padding-left: 50px;
    padding-right: 50px;
    height: 526px;
  }
  @media screen and (min-width: 1280px) {
    height: 600px;
  }
`;
