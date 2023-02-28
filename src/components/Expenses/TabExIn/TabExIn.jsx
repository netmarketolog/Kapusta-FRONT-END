import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {selectTransactions} from 'redux/selectors'

import moment from 'moment';

import {
  TabExInContainer,
  Item,
  Plug,
  Scrollbar,
} from './TabExIn.styled';

export const TabExIn = () => {
  const [transactions, setTransactions] = useState([]);

  const items = useSelector(selectTransactions);
  useEffect(() => {
    setTransactions(items);
  }, [items]);

  return (
    <TabExInContainer>
      <Scrollbar>
      <ul>
        {transactions.map(({ _id, date, description, category, sum }) =>
          _id ? (
            <Item key={_id}>
              <p>{moment(date).format('DD.MM.YYYY')}</p>
              <p>{description}</p>
              <p>{category}</p>
              <p>{sum.toFixed(2)}</p>
              <p></p>
            </Item>
          ) : (
            <Plug key={_id}></Plug>
          )
        )}
      </ul>
      </Scrollbar>
    </TabExInContainer>
  );
};
