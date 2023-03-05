import { SelectCustom } from './ProductCategori.styled';
import React from 'react';
import { INCOME, EXPENSE } from '../../utils/constants';

export const ProductCategori = ({ updateCategory, operation, category }) => {
  return (
    <div>
      <SelectCustom
        classNamePrefix="custom-select"
        onChange={updateCategory}
        value={category}
        options={operation === 'income' ? INCOME : EXPENSE}
        isSearchable={false}
        placeholder={'label category'}
      />
    </div>
  );
};
