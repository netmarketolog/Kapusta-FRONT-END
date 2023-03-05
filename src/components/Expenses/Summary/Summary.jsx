import {
  SummaryContainer,
  TitleContainer,
  Text,
  Item,
  Plug,
} from './Summary.styled';

import { selectIsLoading, selectSumary } from '../../../redux/selectors';
import { useSelector } from 'react-redux';
import Loader from 'components/Loader/Loader';

export const Summary = () => {
  const isLoading = useSelector(selectIsLoading);
  const selectSummary = useSelector(selectSumary);

  return (
    <SummaryContainer>
      <TitleContainer>
        <Text>Summary</Text>
      </TitleContainer>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </SummaryContainer>
  );
};
