import { 
  TitleItem, 
  Title, 
  Container,
  Scrollbar,
  BudgetList,
  Item,
  Form,
  DatePicker,
  ConteinerGeneral,
} from './Expenses.styled';

import {Tab} from './Tab/Tab';
// import {Summary} from '../../Summary/Summary';

// import { 
//   InputWraper
// } from './InputWraper/InputWraper';

import {DatePickerCustom} from '../Expenses/DatePicker/DatePicker'

export const Expenses = () => {
  return (
    <>
    <Tab></Tab>
    <ConteinerGeneral>
      <Form>
        <DatePicker>
          <DatePickerCustom/>
          {/* <InputWraper/> */}
        </DatePicker>
      </Form>
        <Container>
          <Title>
            <TitleItem>DATA</TitleItem>
            <TitleItem>DESCRIPTION</TitleItem>
            <TitleItem>CATEGORY</TitleItem>
            <TitleItem>SUM</TitleItem>
          </Title>

            <Scrollbar>
              <BudgetList>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
                <Item></Item>
              </BudgetList>
            </Scrollbar>
            {/* <Summary></Summary> */}

        </Container>
        
    </ConteinerGeneral>  
    </>
  );
};
