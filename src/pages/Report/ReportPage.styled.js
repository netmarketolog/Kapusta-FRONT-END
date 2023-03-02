import styled from 'styled-components';

export const ContainerConfig = styled.div`
  position: relative;
  margin: auto;
  width: 320px;
  padding-top: 56px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;
