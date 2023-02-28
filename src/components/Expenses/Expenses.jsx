import {
  TitleItem,
  Title,
  Container,
  Form,
  DatePicker,
  ConteinerGeneral,
  Cont,
  ButtonCont,
  ContForm,
} from './Expenses.styled';

import { Tab } from './Tab/Tab';
import { Summary } from '../Expenses/Summary/Summary';
import { ProductCategori } from '../ProductCategory/ProductCategori.jsx';
import { Button } from '../Expenses/Buttons/Buttons';

import { Input } from './Input/Input';
import { Calc } from './Calc/Calc';
import { TabExIn } from './TabExIn/TabExIn';

import { Calendar } from '../../components/Expenses/DatePicker/DatePicker';
// import { useState } from 'react';
// import { setOperationType } from 'redux/transactions/transactionsSlice';
import { useDispatch } from 'react-redux';
import { getTransactions } from 'redux/transactions/transactionsOperations';

export const Expenses = () => {
  // const [ btn, setBtn ] = useState(true);
  const dispatch = useDispatch();

  const switchOperationType = type => {
    console.log(type.target.name);
    // dispatch(setOperationType(type.target.name));
    dispatch(getTransactions(type.target.name));
  };

  return (
    <>
      <Tab switchOperationType={switchOperationType} />
      <ConteinerGeneral>
        <ContForm>
          <Form>
            <DatePicker>
              <Calendar />
              <Input></Input>
              <ProductCategori></ProductCategori>
              <Calc></Calc>
            </DatePicker>
          </Form>
          <ButtonCont>
            <Button>INPUT</Button>
            <Button>CLEAR</Button>
          </ButtonCont>
        </ContForm>
        <Cont>
          <Container>
            <Title>
              <TitleItem>DATA</TitleItem>
              <TitleItem>DESCRIPTION</TitleItem>
              <TitleItem>CATEGORY</TitleItem>
              <TitleItem>SUM</TitleItem>
            </Title>
            <TabExIn></TabExIn>
          </Container>
          <Summary></Summary>
        </Cont>
      </ConteinerGeneral>
    </>
  );
};
