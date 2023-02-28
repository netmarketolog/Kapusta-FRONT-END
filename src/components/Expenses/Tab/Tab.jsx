import { useDispatch, useSelector } from 'react-redux';

import { setOperationType } from 'redux/transactions/transactionsSlice';
import { selectOperationType } from 'redux/selectors';

import {
  TabConteiner,
} from './Tab.styled';

import TabButton from './Buttons';

import {OPERATION_TYPES} from 'utils/constants';

export const Tab = ({ onChange }) => {

  const dispatch = useDispatch();
  const switchOperationType = e => {
    console.log(e.target);
    onChange(true);
    dispatch(setOperationType(e));
    console.log('switchOperationType');
  };

  // e.target.name ()
  // () => switchOperationType(OPERATION_TYPES.expense)
  // () => switchOperationType(OPERATION_TYPES.income)

  // useEffect(() => {

  //   console.log('switchOperationType');
  // }, [dispatch]);

  const OperationType = useSelector(selectOperationType);

  return (
    <TabConteiner>
      <TabButton
      type="button"
      onClick={switchOperationType}
      active={OperationType === OPERATION_TYPES.expense ? true : false}
      name='EXPENSES'
      >EXPENSES</TabButton>
      <TabButton
      type="button"
      onClick={switchOperationType}
      active={OperationType === OPERATION_TYPES.income ? true : false}
      name='INCOME'
      >INCOME</TabButton>
   </TabConteiner>
  );
}