import { useEffect, useState } from 'react';
import { ReportsBtn } from './ReportsButton/ReportsBtn';
import {
  BackgroundContainer,
  BalanceContainer,
  BalanceText,
  Balance,
  BalanceInput,
  InputBtn,
  BalanceForm,
  Label,
  InputContainer,
} from './ChangeBalance.styled';
import { addBalance, fetchBalance } from './api';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../../redux/balance/balanceSlice';

export const ChangeBalance = () => {
  const [balance, setBalance] = useState(`00.00`);
  const balanceState = useSelector(state => state.balance);
  console.log(balanceState);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBalance()
      .then(res => dispatch(update(Number(res))))
      .catch(error => console.error(error));
  }, [dispatch]);

  const formBalanceChange = e => {
    setBalance(e.currentTarget.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    dispatch(
      addBalance({
        balance: Number(balance),
      })
    );
    dispatch(update(balance));
  };

  console.log(balance);
  return (
    <BackgroundContainer>
      <BalanceContainer>
        <ReportsBtn />

        <Balance>
          <BalanceText>Balance:</BalanceText>
          <BalanceForm onSubmit={formSubmit}>
            <InputContainer>
              <BalanceInput
                type="Number"
                value={
                  balanceState.balance > 0 ? balanceState.balance : balance
                }
                onChange={formBalanceChange}
                disabled={balanceState.balance > 0 ? true : false}
              />
              <Label>UAH</Label>
            </InputContainer>
            <InputBtn
              type="submit"
              disabled={balanceState.balance > 0 ? true : false}
              onSubmit={formSubmit}
            >
              Confirm
            </InputBtn>
          </BalanceForm>
        </Balance>
      </BalanceContainer>
    </BackgroundContainer>
  );
};
