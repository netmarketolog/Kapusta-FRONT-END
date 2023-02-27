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
import { addBalance } from '../../redux/balance/balanceOperation';
import { selectBalance } from '../../redux/selectors';
import { LoaderBtn } from '../Loader/Loader';

export const ChangeBalance = () => {
  const [startBalance, setStartBalance] = useState(`00.00`);
  const { balance, isRefreshing } = useSelector(selectBalance);

  const dispatch = useDispatch();
  const formBalanceChange = e => {
    setStartBalance(e.currentTarget.value);
  };

  const formSubmit = e => {
    e.preventDefault();
    dispatch(
      addBalance({
        balance: Number(startBalance),
      })
    );
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
              {isRefreshing ? (
                LoaderBtn()
              ) : (
                <>
                  <BalanceInput
                    type="Number"
                    value={balance > 0 ? balance : startBalance} //
                    disabled={balance > 0 ? true : false}
                    onChange={formBalanceChange}
                  />
                  <Label>UAH</Label>
                </>
              )}
            </InputContainer>
            <InputBtn
              BackgroundColor="transparent"
              type="submit"
              disabled={balance > 0 ? true : false}
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
