import {
  SummaryContainer,
  TitleContainer,
  Text,
  Item,
  Plug,
} from './Summary.styled';

import { defaultItem } from './DefaultItem';

export const Summary = () => {
  const summary = [...defaultItem];

  for (let i = 0; i < 6; i += 1) {
    const emptyMonth = { id: 100 + i, month: '', amount: '' };
    summary.push(emptyMonth);
  }

  const summaryArray = summary.slice(0, 6);

  return (
    <SummaryContainer>
      <TitleContainer>
        <Text>Summary</Text>
      </TitleContainer>
      <ul>
        {summaryArray.map(({ id, month, amount }) =>
          month ? (
            <Item key={id}>
              <p>{month}</p>
              <p>{amount.toFixed(2)}</p>
            </Item>
          ) : (
            <Plug key={id}></Plug>
          )
        )}
      </ul>
    </SummaryContainer>
  );
};
