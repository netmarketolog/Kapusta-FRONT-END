import {
  StyledButtonExpenses,
  StyledButtonIncome,
  TabConteiner,
  TitleConteinerExpenses,
  TitleConteinerIncome,
} from './Tab.styled';

export const Tab = () => {
  return (
    <TabConteiner>
      <TitleConteinerExpenses>
          <StyledButtonExpenses>EXPENSES</StyledButtonExpenses>
      </TitleConteinerExpenses>
      <TitleConteinerIncome>
          <StyledButtonIncome>INCOME</StyledButtonIncome>
      </TitleConteinerIncome>
   </TabConteiner>
  );
}