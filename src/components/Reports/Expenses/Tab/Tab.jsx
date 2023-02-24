import {
  // StyledButtonExpenses,
  // StyledButtonIncome,
  TabConteiner,
  // TitleConteinerExpenses,
  // TitleConteinerIncome,
} from './Tab.styled';

import TabButton from './Buttons';

export const Tab = () => {
  return (
    <TabConteiner>
      <TabButton>EXPENSES</TabButton>
      <TabButton>INCOME</TabButton>
   </TabConteiner>
  );
}