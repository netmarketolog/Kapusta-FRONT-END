import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { addBalance } from '../../redux/user/balanceOperation';
import { selectUser } from '../../redux/selectors';
import { LoaderBtn } from '../Loader/Loader';

export const ChangeBalance = () => {
  const [balance, setBalance] = useState(`00.00`);
  const { user, isRefreshing } = useSelector(selectUser);
  const dispatch = useDispatch();
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
  };
  const newBalance = user.balance;
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
                value={newBalance > 0 ? newBalance : balance}
                onChange={formBalanceChange}
                disabled={newBalance > 0 ? true : false}
              />
              <Label>UAH</Label>
            </InputContainer>
            <InputBtn
              type="submit"
              disabled={newBalance > 0 ? true : false}
              onSubmit={formSubmit}
            >
              {isRefreshing ? LoaderBtn() : 'Confirm'}
            </InputBtn>
          </BalanceForm>
        </Balance>
      </BalanceContainer>
    </BackgroundContainer>
  );
};
