import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
  padding: 40px 0px 110px;
  background-color: #f5f6fb;
  border-bottom-left-radius: 100px;
`;
export const BalanceContainer = styled.div`
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;
export const ReportsLink = styled.p`
  margin: 0;
  margin-right: 15px;
  padding: 0;
  color: rgba(82, 85, 95, 0.7);
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
`;
export const ReportsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 45px;
`;
export const BalanceText = styled.p`
  color: rgba(82, 85, 95, 0.7);
  margin: 0;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  margin-bottom: 8px;
`;
export const Balance = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const BalanceForm = styled.form`
  display: flex;
`;
export const BalanceInput = styled.input`
  width: 101px;
  text-align: end;
  padding: 12px 16px 12px 19px;
  border: 2px solid #fff;
  border-radius: 22px 0px 0px 22px;
  background: transparent;
outline: none;
  :focus {
    border-width: 2px
    border-style: solid;
    border-color: #ff751d;
  }
`;
export const InputBtn = styled.button`
  width: 142px;
  height: 44px;
  color: rgba(82, 85, 95, 0.7);
  padding: 12px 22px 12px 18px;
  border-width: 2px 2px 2px 0px;
  border-style: solid;
  border-color: #fff;
  border-radius: 0px 22px 22px 0px;
  background: transparent;
  //   margin-left: -2px;
  :hover {
    border-width: 2px 2px 2px 0px;
    border-style: solid;
    border-color: #ff751d;
    background: #ff751d;
    color: #ffffff;
  }
`;
