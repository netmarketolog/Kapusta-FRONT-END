import styled from 'styled-components';

export const StyledTabButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 53px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.17;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  background-color: #0f182b;
  cursor: pointer;
  border-width: 0;

  &:focus {
    color: #fefefe;
    background-color: #ff751d;
    border: none;
  }

  @media screen and (min-width: 768px) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 138px;
    height: 40px;
    color: #000000;
    background-color: #fafbfd;
    &:focus {
      color: #ff751d;
      background-color: #fefefe;
      border: none;
    }
  }
`;
