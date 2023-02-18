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
  CalendarContainer,
  Calendar,
  Label,
  InputContainer,
} from './ChangeBalance.styled';

import { ReactComponent as ReportsSvg } from '../../images/icons/ReportsSvg.svg';
import { ReactComponent as CalendarSvg } from '../../images/icons/СalendarSvg.svg';

export const ChangeBalance = () => {
  const [balance, setbalance] = useState(`00.00`);
  const date = new Date().toLocaleDateString();

  const formBalanceChange = e => {
    setbalance(e.currentTarget.value);
  };
  const formSubmit = e => {
    e.preventDefault();
  };

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
            <InputContainer>
              <BalanceInput
                type="Number"
                value={balance}
                onChange={formBalanceChange}
              />
              <Label>UAH</Label>
            </InputContainer>
            <InputBtn type="submit">Confirm</InputBtn>
          </BalanceForm>
        </Balance>

        <CalendarContainer>
          <CalendarSvg />
          <Calendar>{date}</Calendar>
        </CalendarContainer>
      </BalanceContainer>
    </BackgroundContainer>
  );
};
