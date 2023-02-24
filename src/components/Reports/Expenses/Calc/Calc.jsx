import { CalcS } from './Calc.styled';

import React from 'react';

export const Calc = () => {
  return (
    <>
        {/* <ContCalk> */}
            <CalcS
                type="number"
                name="calc"
                placeholder="0,00"
                autoComplete="off"
            />
            {/* <IconCalc></IconCalc>
        </ContCalk> */}
    </>
  );
};