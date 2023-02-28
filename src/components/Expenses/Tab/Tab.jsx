import { PropTypes } from 'prop-types';

import { TabConteiner } from './Tab.styled';
import { StyledTabButton, StyledTabButtonA } from './Button.styled';

export const Tab = ({ switchOperation, btn }) => {

  return (
    <TabConteiner>
      <StyledTabButton
        type="button"
        onClick={switchOperation}
        active={btn}
        name="expense"
      >
        EXPENSES
      </StyledTabButton>
      <StyledTabButtonA
        type="button"
        onClick={switchOperation}
        active={!btn}
        name="income"
      >
        INCOME
      </StyledTabButtonA>
    </TabConteiner>
  );
};

Tab.propTypes = {
  switchOperation: PropTypes.func.isRequired,
  btn: PropTypes.bool.isRequired,
};