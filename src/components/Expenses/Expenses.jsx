import { useDispatch } from 'react-redux';
import { getTransactions } from 'redux/transactions/transactionsOperations';
import { useState } from 'react';

import { Tab } from './Tab/Tab';
import { Summary } from '../Expenses/Summary/Summary';
import { ProductCategori } from '../ProductCategory/ProductCategori.jsx';
import { Button } from '../Expenses/Buttons/Buttons';

import { Input } from './Input/Input';
import { Calc } from './Calc/Calc';
import { TabExIn } from './TabExIn/TabExIn';

import { Calendar } from '../../components/Expenses/DatePicker/DatePicker';

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

export const Expenses = () => {
  const dispatch = useDispatch();
  const [btn, setBtn] = useState(true);

  const toggleBtn = () => {
    setBtn(!btn);
  };

  const switchOperation = type => {
    const operation = type.target.name ?? 'expense';
    dispatch(getTransactions({ operation }));
    toggleBtn();
  };

  return (
    <>
      <Tab switchOperation={switchOperation} btn={btn} />
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

