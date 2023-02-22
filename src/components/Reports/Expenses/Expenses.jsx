import { 
  TitleItem, 
  DesktopTitle, 
  DesctopContainer,
  DesctopScrollbar,
  DesctopExpensesList,
  DesktopItem,
  FormDesktop,
  DatePickerDesktop,
  ConteinerGeneral,
} from './Expenses.styled';

import { 
  Tab
} from './Tab/Tab';

// import { 
//   InputWraper
// } from './InputWraper/InputWraper';

import {DatePickerCustom} from '../Expenses/DatePicker/DatePicker'

export const Expenses = () => {
  return (
    <>
    <Tab></Tab>
    <ConteinerGeneral>
      <FormDesktop>
        <DatePickerDesktop>
          <DatePickerCustom/>
          {/* <InputWraper/> */}
        </DatePickerDesktop>
      </FormDesktop>
        <DesctopContainer>
          <DesktopTitle>
            <TitleItem>DATA</TitleItem>
            <TitleItem>DESCRIPTION</TitleItem>
            <TitleItem>CATEGORY</TitleItem>
            <TitleItem>SUM</TitleItem>
          </DesktopTitle>
          <DesctopScrollbar>
            <DesctopExpensesList>
              <DesktopItem></DesktopItem>
              <DesktopItem></DesktopItem>
              <DesktopItem></DesktopItem>
              <DesktopItem></DesktopItem>
              <DesktopItem></DesktopItem>
              <DesktopItem></DesktopItem>
              <DesktopItem></DesktopItem>
              <DesktopItem></DesktopItem>
              <DesktopItem></DesktopItem>
            </DesctopExpensesList>
          </DesctopScrollbar>
        </DesctopContainer>
    </ConteinerGeneral>  
    </>
  );
};
