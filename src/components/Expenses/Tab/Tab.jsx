import {
  TabConteiner,
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