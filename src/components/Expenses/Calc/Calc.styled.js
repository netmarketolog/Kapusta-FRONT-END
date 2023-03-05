import styled from 'styled-components';

export const CalcS = styled.input`
  display: block;
  width: 125px;
  height: 44px;
  border: 2px solid #ffffff;
  border-radius: 22px;
  margin: auto;
  margin-top: 8px;
  background-color: transparent;
  padding-left: 50px;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: block;
    width: 280px;
    height: 44px;
    margin: 0;
    background-color: transparent;
    border-radius: 0 16px 16px 0;
    padding-left: 19px;
    outline: none;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    color: #c7ccdc;
    :hover {
      outline: none;
      border: 2px solid #c7ccdc;
    }
    width: 110px;
    border: 2px solid #f5f6fb;
    border-left: 1px #c7ccdc;
  }

  @media screen and (min-width: 1280px) {
    width: 119px;
    border-left: 1px #c7ccdc;
  }
`;
