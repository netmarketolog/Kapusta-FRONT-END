import { CalcS } from './Calc.styled';

import React from 'react';

export const Calc = ({ value, changeValue }) => {
  return (
    <>
      <CalcS
        type="number"
        name="calc"
        placeholder="0,00"
        autoComplete="off"
        value={value}
        onChange={e => changeValue(Number(e.target.value))}
      />
    </>
  );
};
