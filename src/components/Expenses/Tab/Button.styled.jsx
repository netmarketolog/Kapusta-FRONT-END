import styled from 'styled-components';

const BTN_NAME = {
  REGISTER: 'register',
  LOGIN: 'login',
  ORANGE: 'orange',
  WHITE: 'white',
  CONFIRM: 'confirm',
};

export const StyledTabButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 53px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  background-color: #FAFBFD;
  border-style: solid;
  border-color: ${props =>
    props.type === BTN_NAME.WHITE ? '#FEFEFE' : '#FAFBFD'};

  &:focus {
    color: #FEFEFE;
    background-color: #FF751D;
    border: none;
  }
  
  @media screen and (min-width: 768px) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 138px;
    height: 40px;
    color: #000000;
    background-color: #FAFBFD;
    &:focus {
      color: #FF751D;
      background-color: #FEFEFE;
      border: none;
    }
  }

`;

export const StyledTabButtonA = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 53px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  background-color: #FAFBFD;
  border-style: solid;
  border-color: ${props =>
    props.type === BTN_NAME.WHITE ? '#FEFEFE' : '#FAFBFD'};

  &:focus {
    color: #FEFEFE;
    background-color: #FF751D;
    border: none;
  }
  
  @media screen and (min-width: 768px) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 138px;
    height: 40px;
    color: #000000;
    background-color: #FAFBFD;
    &:focus {
      color: #FF751D;
      background-color: #FEFEFE;
      border: none;
    }
  }

`;

