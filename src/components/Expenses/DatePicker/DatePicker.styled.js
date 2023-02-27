import styled from 'styled-components';

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (min-width: 320px) {
    width: auto;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 30px;
    margin-right: 30px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 20px;
    margin-left: 32px;
  };
  .react-datepicker__input-container{
    width: 80px;
  };
  input{
    border: none;
    width: 100px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
`;
