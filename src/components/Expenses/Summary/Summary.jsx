import {
  SummaryContainer,
  TitleContainer,
  Text,
  Item,
  Plug,
} from './Summary.styled';

import { selectSumary } from '../../../redux/selectors';
import { useSelector } from 'react-redux';

export const Summary = () => {
  const selectSummary = useSelector(selectSumary);

  return (
    <SummaryContainer>
      <TitleContainer>
        <Text>Summary</Text>
      </TitleContainer>
      <ul>
        {selectSummary.map(({ name, total }) =>
          name ? (
            <Item key={name}>
              <p>{name}</p>
              <p>{total.toFixed(2)}</p>
            </Item>
          ) : (
            <Plug key={name}></Plug>
          )
        )}
      </ul>
    </SummaryContainer>
  );
};
