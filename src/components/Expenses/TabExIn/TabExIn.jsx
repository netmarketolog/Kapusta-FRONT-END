import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTransactions } from 'redux/selectors';

import moment from 'moment';

import {
  TabExInContainer,
  Item,
  Plug,
  Scrollbar,
  DescriptionStyle,
} from './TabExIn.styled';
import { BasketBtn } from './BasketBtn';

export const TabExIn = ({ operation }) => {
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
                <DescriptionStyle>{description}</DescriptionStyle>
                <p>{category}</p>
                <p
                  style={{
                    fontWeight: 700,
                    color: operation === 'expense' ? '#E7192E' : '#407946',
                  }}
                >
                  {operation === 'expense' ? '- ' : ''}
                  {sum.toFixed(2)}
                </p>
                <p>
                  <BasketBtn transactionId={_id} />
                </p>
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
