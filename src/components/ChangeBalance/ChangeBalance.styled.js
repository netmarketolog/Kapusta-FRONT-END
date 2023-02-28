import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
  padding-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;
export const BalanceContainer = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: 704px;
  }

  @media screen and (min-width: 1200px) {
    width: 1034px;
    justify-content: flex-start;
  }
`;

export const Balance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 0px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 298px;
  }
`;

export const BalanceText = styled.p`
  display: flex;
  align-items: center;
  color: rgba(82, 85, 95, 0.7);
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 21px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 20px;
  }
`;

export const BalanceForm = styled.form`
  display: flex;
`;

export const BalanceInput = styled.input`
  width: 140px;
  height: 44px;
  text-align: end;
  padding: 12px 44px 12px 19px;
  border: 2px solid #fff;
  border-radius: 22px 0px 0px 22px;
  background: transparent;
  outline: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #000000;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::-moz-outer-spin-button,
  ::-moz-inner-spin-button {
    -moz-appearance: none;
  }
  ::-ms-outer-spin-button,
  ::-ms-inner-spin-button {
    -ms-appearance: none;
  }

  :focus {
    border-width: 2px;
    border-style: solid;
    border-color: #ff751d;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    padding: 12px 47px 12px 0px;
    margin-right: 15px;
    border: 2px solid #ffffff;
    border-radius: 16px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 16px;
  }
`;
export const ReportsBalanceInput = styled.input`
  width: 183px;
  height: 44px;
  text-align: center;
  padding: 12px 44px 12px 19px;
  border: 2px solid #fff;
  border-radius: 22px 22px 22px 22px;
  background: transparent;
  outline: none;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #000000;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  ::-moz-outer-spin-button,
  ::-moz-inner-spin-button {
    -moz-appearance: none;
  }
  ::-ms-outer-spin-button,
  ::-ms-inner-spin-button {
    -ms-appearance: none;
  }

  :focus {
    border-width: 2px;
    border-style: solid;
    border-color: #ff751d;
  }

  @media screen and (min-width: 768px) {
    width: 125px;
    padding: 12px 47px 12px 0px;
    margin-right: 15px;
    border: 2px solid #ffffff;
    border-radius: 16px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 16px;
  }
`;
export const InputBtn = styled.button`
  width: 142px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(82, 85, 95, 0.7);
  padding: 12px 22px 12px 18px;
  border-width: 2px 2px 2px 0px;
  border-style: solid;
  border-color: #fff;
  border-radius: 0px 22px 22px 0px;
  background: transparent;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgba(82, 85, 95, 0.7);
  :hover {
    border-width: 2px 2px 2px 0px;
    border-style: solid;
    border-color: #ff751d;
    background: #ff751d;
    color: #ffffff;
  }
  :disabled {
    width: 142px;
    height: 44px;
    align-items: center;
    color: rgba(82, 85, 95, 0.7);
    padding: 12px 22px 12px 18px;
    border-width: 2px 2px 2px 0px;
    border-style: solid;
    border-color: #fff;
    border-radius: 0px 22px 22px 0px;
    background: transparent;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: rgba(82, 85, 95, 0.7);
    @media screen and (min-width: 768px) {
      width: 125px;
      padding: 12px 6px;
      border: 2px solid #ffffff;
      border-radius: 16px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 125px;
    padding: 12px 6px;
    border: 2px solid #ffffff;
    border-radius: 16px;
    :hover {
      border-width: 2px 2px 2px 2px;
    }
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 16px;
  right: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  margin-right: 16px;

  @media screen and (min-width: 768px) {
    margin-right: 36px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
