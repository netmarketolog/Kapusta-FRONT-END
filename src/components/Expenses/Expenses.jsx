import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTransaction,
  getTransactions,
} from 'redux/transactions/transactionsOperations';

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
  TabStyle,
} from './Expenses.styled';
import { selectTokenDeadline } from 'redux/selectors';
import { RefreshUser } from 'redux/auth/authOperations';

export const Expenses = ({ operation, setOperation }) => {
  const dispatch = useDispatch();
  // const [btn, setBtn] = useState(true);
  const [description, setDescription] = useState('');
  const [sum, setSum] = useState('');
  const [date, setDate] = useState(new Date());
  const [category, setCategory] = useState('');
  const deadline = useSelector(selectTokenDeadline);

  // const toggleBtn = () => {
  //   setBtn(!btn);
  // };
  const switchOperation = async type => {
    setOperation(type);
    if (deadline) {
      if (Date.now() >= deadline) await dispatch(RefreshUser());
    }
    await dispatch(getTransactions({ operation }));
    // toggleBtn();
  };

  const handleSubmit = async () => {
    if (description === '' || sum === '') return;
    if (deadline) {
      if (Date.now() >= deadline) await dispatch(RefreshUser());
    }
    await dispatch(
      addTransaction({
        date,
        description,
        category,
        sum,
        operation,
      })
    );
    await dispatch(getTransactions({ operation }));
    console.log('qeqewqewq');
    setDescription('');
    setSum('');
    setDate(new Date());
  };

  const handleClear = () => {
    setDescription('');
    setSum('');
    setDate(new Date());
  };
  const updateCategory = value => {
    setCategory(value);
  };
  return (
    <>
      <TabStyle>
        <Tab switchOperation={switchOperation} operation={operation} />
      </TabStyle>
      <ConteinerGeneral>
        <ContForm>
          <Form>
            <DatePicker>
              <Calendar value={date} changeValue={setDate} />
              <Input value={description} changeValue={setDescription}></Input>
              <ProductCategori updateCategory={updateCategory} />
              <Calc value={sum} changeValue={setSum}></Calc>
            </DatePicker>
          </Form>
          <ButtonCont>
            <Button handleAction={handleSubmit}>INPUT</Button>
            <Button handleAction={handleClear}>CLEAR</Button>
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
          <Summary />
        </Cont>
      </ConteinerGeneral>
    </>
  );
};
