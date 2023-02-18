import { useState } from 'react';
import {
  BackgroundContainer,
  ReportsLink,
  ReportsContainer,
  BalanceContainer,
  BalanceText,
  Balance,
  BalanceInput,
  InputBtn,
  BalanceForm,
} from './ChangeBalance.styled';
import { ReactComponent as ReportsSvg } from './svg/ReportsSvg.svg';

export const ChangeBalance = () => {
  const [balance, setbalance] = useState(`00.00 UAH`);

  const formBalanceChange = e => {
    setbalance(e.currentTarget.value);
  };

  const formSubmit = e => {
    e.preventDefault();
  };
  console.log(balance);
  return (
    <BackgroundContainer>
      <BalanceContainer>
        <ReportsContainer>
          <ReportsLink>Reports</ReportsLink>
          <ReportsSvg />
        </ReportsContainer>

        <Balance>
          <BalanceText>Balance:</BalanceText>
          <BalanceForm onSubmit={formSubmit}>
            <BalanceInput
              type="text"
              value={`${balance}`}
              onChange={formBalanceChange}
            />
            <InputBtn type="submit">Confirm</InputBtn>
          </BalanceForm>
        </Balance>
      </BalanceContainer>
    </BackgroundContainer>
  );
};
