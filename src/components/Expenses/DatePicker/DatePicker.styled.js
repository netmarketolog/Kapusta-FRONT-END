import styled from 'styled-components';

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border: 2px solid #ffffff;
  border-radius: 16px;
  border-bottom-right-radius: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    border: 2px solid #c7ccdc;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 30px;
    width: 104px;
  }

  @media screen and (min-width: 1280px) {
    margin: auto;
  }
  .react-datepicker-wrapper {
    display: inline-block;
    padding: 0;
    border: 0;
    width: auto;
  }
  .react-datepicker__input-container {
    width: 80px;
  }
  input {
    width: 150px;
    background-color: transparent;
    border: none;
    font-family: Roboto;
    font-style: normal;
    font-weight: 900;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    outline: none;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      width: 80px;
      height: 40px;
      padding: 13px 5px;
    }
  }
`;
