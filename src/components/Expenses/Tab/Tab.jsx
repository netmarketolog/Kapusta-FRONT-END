import { PropTypes } from 'prop-types';

import { TabConteiner } from './Tab.styled';
import { StyledTabButton } from './Button.styled';

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
      >
        EXPENSES
      </StyledTabButton>
      <StyledTabButton
        type="button"
        onClick={() => switchOperation('income')}
        style={{
          backgroundColor: operation === 'income' ? '#FEFEFE' : '#FAFBFD',
          color: operation === 'income' ? '#ff751d' : '#000000',
        }}
      >
        INCOME
      </StyledTabButton>
    </TabConteiner>
  );
};

Tab.propTypes = {
  switchOperation: PropTypes.func.isRequired,
  operation: PropTypes.string.isRequired,
};
