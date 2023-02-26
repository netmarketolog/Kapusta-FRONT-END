import {
  TabExInContainer,
  // TitleContainer,
  // Text,
  Item,
  Plug,
  Scrollbar,
} from './TabExIn.styled';

import { defaultItem } from './DefaultItem';

export const TabExIn = () => {
  const tableexin = [...defaultItem];

  // for (let i = 0; i < 9; i += 1) {
  //   const emptyData = { id: 0 + i, data: '', description: '', category: '', sum:'', };
  //   tableexin.push(emptyData);
  // }

  // const tableexinArray = tableexin.slice(0, 9);

  return (
    
    <TabExInContainer>
      <Scrollbar>
      <ul>
        {tableexin.map(({ id, data, description, category, sum }) =>
          id ? (
            <Item key={id}>
              <p>{data}</p>
              <p>{description}</p>
              <p>{category}</p>
              <p>{sum.toFixed(2)}</p>
              <p></p>
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
