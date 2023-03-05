import styled from 'styled-components';

const BTN_NAME = {
  REGISTER: 'register',
  LOGIN: 'login',
  ORANGE: 'orange',
  WHITE: 'white',
  CONFIRM: 'confirm',
};

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 158px;
  height: 53px;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.167;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  color: ${props =>
    props.type === (BTN_NAME.LOGIN || BTN_NAME.ORANGE) ? '#fff' : '#52555f'};

  background-color: ${props =>
    props.type === BTN_NAME.REGISTER
      ? '#f6f7fb'
      : props.type === (BTN_NAME.LOGIN || BTN_NAME.ORANGE)
      ? '#ff751d'
      : 'transparent'};
  border-width: ${props => (props.type === BTN_NAME.REGISTER ? 0 : '2px')};
  border-style: solid;
  border-color: ${props =>
    props.type === BTN_NAME.WHITE ? 'none' : '#F6F7FC'};

  box-shadow: ${props =>
    props.type === BTN_NAME.REGISTER
      ? '1px 3px 5px rgba(82, 85, 95, 0.15)'
      : 'none'};
  border-radius: 16px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    border-radius: ${props =>
      props.type === BTN_NAME.CONFIRM && '0px 22px 22px 0px'};
    border-radius: 16px;
    width: 125px;
    height: 44px;
    margin-right: 15px;
    margin-left: 0px;
  }

  @media screen and (min-width: 1280px) {
    border-radius: 16px;
    width: 136px;
    height: 44px;
    margin-right: -16px;
    margin-left: 32px;
  }

  &:hover,
  &:focus {
    color: #fff;
    background-color: #ff751d;
    border: none;
  }
`;
