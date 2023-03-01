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
  ReportsBalance,
} from './ChangeBalance.styled';
import { addBalance } from '../../redux/balance/balanceOperation';
import { selectBalance, selectIsRefreshing } from '../../redux/selectors';
import { LoaderBtn } from '../Loader/Loader';
import { useLocation } from 'react-router-dom';
// import { ModalInfo } from 'components/Modal/ModalInfo/ModalInfo';

export const ChangeBalance = () => {
  const [startBalance, setStartBalance] = useState(`00.00`);
  const { pathname } = useLocation();
  const balance = useSelector(selectBalance);
  const IsRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const screenWidth = window.screen.width;

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

  return (
    <BackgroundContainer>
      <BalanceContainer>
        {/* <ModalInfo /> */}
        {pathname === '/reports' ? <></> : <ReportsBtn />}

        <Balance>
          <BalanceText>Balance:</BalanceText>
          <BalanceForm onSubmit={formSubmit}>
            <InputContainer>
              {IsRefreshing ? (
                LoaderBtn()
              ) : pathname === '/reports' ? (
                <>
                  <ReportsBalance>
                    <p>{balance} UAH</p>
                  </ReportsBalance>
                </>
              ) : (
                <>
                  <BalanceInput
                    type="Number"
                    value={balance > 0 ? balance : startBalance}
                    disabled={balance > 0 ? true : false}
                    onChange={formBalanceChange}
                  />
                  <Label>UAH</Label>
                </>
              )}
            </InputContainer>

            {pathname === '/reports' && screenWidth <= 1280 ? (
              <></>
            ) : (
              <InputBtn
                BackgroundColor="transparent"
                type="submit"
                disabled={balance > 0 ? true : false}
                onSubmit={formSubmit}
              >
                {IsRefreshing ? LoaderBtn() : 'Confirm'}
              </InputBtn>
            )}
          </BalanceForm>
        </Balance>
      </BalanceContainer>
    </BackgroundContainer>
  );
};
