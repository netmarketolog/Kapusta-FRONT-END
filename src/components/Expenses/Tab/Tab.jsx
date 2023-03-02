import { PropTypes } from 'prop-types';

import { TabConteiner } from './Tab.styled';
import { StyledTabButton, StyledTabButtonA } from './Button.styled';

export const Tab = ({ switchOperation, operation }) => {
  return (
    <TabConteiner>
      <StyledTabButton
        type="button"
        onClick={() => switchOperation('expense')}
        style={{
          backgroundColor: operation === 'expense' ? '#FEFEFE' : '#FAFBFD',
          color: operation === 'expense' ? '#ff751d' : '#000000',
        }}
        // style={
        //   operation === 'expense' && {
        //     backgroundColor: '#FEFEFE',
        //     color: '#ff751d',
        //   }
        // }
        // active={operation === 'expense' ? true : false}
        // name="expense"
      >
        EXPENSES
      </StyledTabButton>
      <StyledTabButtonA
        type="button"
        onClick={() => switchOperation('income')}
        style={{
          backgroundColor: operation === 'income' ? '#FEFEFE' : '#FAFBFD',
          color: operation === 'income' ? '#ff751d' : '#000000',
        }}
        // active={operation === 'expense' ? false : true}
        // name="income"
      >
        INCOME
      </StyledTabButtonA>
    </TabConteiner>
  );
};

Tab.propTypes = {
  switchOperation: PropTypes.func.isRequired,
  operation: PropTypes.string.isRequired,
};
