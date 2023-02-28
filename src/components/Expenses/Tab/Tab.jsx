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
  const switchOperationType = type => {
    onChange(true);
    dispatch(setOperationType(type));
  };

  const OperationType = useSelector(selectOperationType);

  return (
    <TabConteiner>
      <TabButton
      type="button"
      onClick={() => switchOperationType(OPERATION_TYPES.expense)}
      active={OperationType === OPERATION_TYPES.expense ? true : false}
      >EXPENSES</TabButton>
      <TabButton
      type="button"
      onClick={() => switchOperationType(OPERATION_TYPES.income)}
      active={OperationType === OPERATION_TYPES.income ? true : false}
      >INCOME</TabButton>
   </TabConteiner>
  );
}