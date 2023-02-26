import {
  TabExInContainer,
  Item,
  Plug,
  Scrollbar,
} from './TabExIn.styled';

import { defaultItem } from './DefaultItem';

export const TabExIn = () => {
  const tableexin = [...defaultItem];

  return (
    <TabExInContainer>
      <Scrollbar>
      <ul>
        {tableexin.map(({ id, data, description, category, sum, img }) =>
          id ? (
            <Item key={id}>
              <p>{data}</p>
              <p>{description}</p>
              <p>{category}</p>
              <p>{sum.toFixed(2)}</p>
              <p>{img}</p>
            </Item>
          ) : (
            <Plug key={id}></Plug>
          )
        )}
      </ul>
      </Scrollbar>
    </TabExInContainer>
  );
};
