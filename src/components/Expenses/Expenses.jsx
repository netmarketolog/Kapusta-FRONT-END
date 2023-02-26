import { 
  TitleItem, 
  Title, 
  Container,
  Form,
  DatePicker,
  ConteinerGeneral,
  Cont,
  ButtonCont,
  ContForm
} from './Expenses.styled';

import {Tab} from './Tab/Tab';
import {Summary} from '../Expenses/Summary/Summary';
import {ProductCategori} from '../ProductCategory/ProductCategori.jsx';
import {Button} from '../Expenses/Buttons/Buttons';


import {Input} from './Input/Input';
import {Calc} from './Calc/Calc';
import {TabExIn} from './TabExIn/TabExIn';

import {DatePickerCustom} from '../Expenses/DatePicker/DatePicker'

export const Expenses = () => {
  return (
    <>
    <Tab></Tab>
    <ConteinerGeneral>
      <ContForm>
        <Form>
          <DatePicker>
            <DatePickerCustom/>
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
