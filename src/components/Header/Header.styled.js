import styled from 'styled-components';

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  width: 320px;
  margin: auto;

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding: 12px 16px;
    width: 1280px;
  }
`;
