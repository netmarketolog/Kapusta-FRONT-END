import styled from 'styled-components';
import { BTN_NAME } from '../../../../utils/constants';

const StyledTabButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 138px;
  height: 40px;
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
  
  @media screen and (min-width: 768px) {
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  @media screen and (max-width: 767px) {
    border-radius: none;
    width: 158px;
    height: 53px;
  }

  &:focus {
    color: #FF751D;
    background-color: #FEFEFE;
    border: none;
  }
`;

export default StyledTabButton;
