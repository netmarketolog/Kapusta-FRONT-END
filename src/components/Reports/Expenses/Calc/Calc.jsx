import { CalcS } from './Calc.styled';

import React from 'react';

export const Calc = () => {
  return (
    <CalcS
        type="number"
        name="calc"
        placeholder="0,00"
        autoComplete="off"
    />
  );
};