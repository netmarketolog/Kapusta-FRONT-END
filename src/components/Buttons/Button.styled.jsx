// import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import styled from 'styled-components';
import { BTN_TYPE } from '../../utils/constants';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 125px;
  height: 44px;

  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #52555f;

  background-color: ${props =>
    props.type === BTN_TYPE.REGISTER ? '#f6f7fb' : 'transparent'};
  border-width: ${props => (props.type === BTN_TYPE.REGISTER ? 0 : '1px')};
  border-style: solid;
  border-color: ${props =>
    props.type === BTN_TYPE.CONFIRMATION ? '#f6f7fc' : '#fff'};
  border-radius: 16px;
  box-shadow: ${props =>
    props.type === BTN_TYPE.REGISTER
      ? '1px 3px 5px rgba(82, 85, 95, 0.15)'
      : 'none'};

  @media screen and (max-width: 767px) {
    border-radius: ${props =>
      props.type === BTN_TYPE.BALANCE_ENTRY && '0px 22px 22px 0px'};
  }

  &:hover,
  &:focus {
    color: #fff;
    background-color: #ff751d;
    border: none;
  }
`;

export default StyledButton;
