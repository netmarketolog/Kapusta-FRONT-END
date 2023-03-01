import styled from 'styled-components';

export const CalcS = styled.input`
  display: block;
  width: 125px;
  height: 44px;
  border: 2px solid #FFFFFF;
  border-radius: 22px 0px 0px 22px;
  margin: auto;
  margin-top: 8px;
  background-color: transparent;
  padding-left: 50px;

  @media screen and (min-width: 768px) {
  display: block;
  width: 280px;
  height: 44px;
  background-color: transparent;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-left: 19px;
  outline: none;
  border: 2px solid #C7CCDC;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #c7ccdc;
  :hover {
    outline: none;
    border: 2px solid #C7CCDC;
    
  }
    width: 110px;
    border-bottom-right-radius: 0px;
    border: 2px solid #f5f6fb;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  @media screen and (min-width: 1200px) {
    width: 119px;
    border-left: 1px #C7CCDC;
  }
`;

