import { 
  TitleItem, 
  Title, 
  Container,
  // Scrollbar,
  // BudgetList,
  // Item,
  Form,
  DatePicker,
  ConteinerGeneral,
  Cont,
} from './Expenses.styled';

import {Tab} from './Tab/Tab';
import {Summary} from '../../Summary/Summary';
import {ProductCategori} from '../../ProductCategory/ProductCategori.jsx';
import Button from '../../Buttons/Buttons';


import {Input} from './Input/Input';
import {Calc} from './Calc/Calc';
import {TabExIn} from './TabExIn/TabExIn';

import {DatePickerCustom} from '../Expenses/DatePicker/DatePicker'

export const Expenses = () => {
  return (
    <>
    <Tab></Tab>
    <ConteinerGeneral>
      <Form>
        <DatePicker>
          <DatePickerCustom/>
          <Input></Input>
          <ProductCategori></ProductCategori>
          <Calc></Calc>
          <Button>INPUT</Button>
          <Button style = {{}}>CLEAR</Button>
        </DatePicker>
      </Form>
      <Cont>
        <Container>
          <Title>
            <TitleItem>DATA</TitleItem>
            <TitleItem>DESCRIPTION</TitleItem>
            <TitleItem>CATEGORY</TitleItem>
            <TitleItem>SUM</TitleItem>
          </Title>
          <TabExIn></TabExIn>
          {/* <Scrollbar> */}
            {/* <BudgetList>
              <Scrollbar>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
              </Scrollbar>
            </BudgetList> */}
          {/* </Scrollbar> */}
        </Container>
        <Summary></Summary>
      </Cont>  
    </ConteinerGeneral>  
    </>
  );
};
