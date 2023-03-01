import { InputW } from './Input.styled';

import React from 'react';

export const Input = ({ value, changeValue }) => {
  console.log({ value });
  // console.log(changeValue);

  return (
    <InputW
      type="product"
      name="product"
      placeholder="Product description"
      autoComplete="off"
      value={value}
      onChange={e => changeValue(e.target.value)}
    />
  );
};
