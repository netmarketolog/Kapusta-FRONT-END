import styled from 'styled-components';

export const InputW = styled.input`
  width: 280px;
  height: 44px;
  background-color: transparent;
  border-top-left-radius: 16px;
  padding-left: 19px;
  outline: none;
  border: 2px solid white;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #c7ccdc;
  :hover {
    outline: none;
    border: 2px solid #C7CCDC;
    
  }
  @media screen and (min-width: 768px) {
    width: 184px;
    border-bottom-right-radius: 0px;
    border: 2px solid #f5f6fb;
    margin-left: 44px;
  }

  @media screen and (min-width: 1280px) {
    width: 290px;
    border-right: 1px #C7CCDC;
    margin-left: 32px;
  }
`;