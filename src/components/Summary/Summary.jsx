import { SummaryContainer, TitleContainer, Text, Item } from './Summary.styled';

import { defaultItem } from './DefaultItem';

export const Summary = () => {
  const summaryLength = defaultItem.slice(0, 6);
  return (
    <SummaryContainer>
      <TitleContainer>
        <Text>Summary</Text>
      </TitleContainer>
      <ul>
        {summaryLength.map(({ id, month, amount }) => (
          <Item key={id}>
            <p>{month}</p>
            <p>{amount}</p>
          </Item>
        ))}
      </ul>
    </SummaryContainer>
  );
};
