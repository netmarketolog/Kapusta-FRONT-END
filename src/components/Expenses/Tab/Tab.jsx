import { OPERATION_TYPES } from 'utils/constants';
import { TabConteiner } from './Tab.styled';
import StyledTabButton from './Button.styled';
import { selectOperationType } from 'redux/selectors';
import { useSelector } from 'react-redux';

export const Tab = ({ switchOperationType }) => {
  const OperationType = useSelector(selectOperationType);
  return (
    <TabConteiner>
      <StyledTabButton
        type="button"
        onClick={switchOperationType}
        active={OperationType === OPERATION_TYPES.expense ? true : false}
        name="expense"
      >
        EXPENSES
      </StyledTabButton>
      <StyledTabButton
        type="button"
        onClick={switchOperationType}
        active={OperationType === OPERATION_TYPES.income ? true : false}
        name="income"
      >
        INCOME
      </StyledTabButton>
    </TabConteiner>
  );
};

// e.target.name ()
// () => switchOperationType(OPERATION_TYPES.expense)
// () => switchOperationType(OPERATION_TYPES.income)

// useEffect(() => {

//   console.log('switchOperationType');
// }, [dispatch]);
