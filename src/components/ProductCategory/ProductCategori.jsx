// import { useState } from 'react';
import { SelectCustom } from './ProductCategori';
import React from 'react';
import { INCOME, EXPENSE } from '../../utils/constants';

export const ProductCategori = ({ updateCategory, operation }) => {
  // const [categories, setCategories] = useState('label category');

  const onChangr = newValue => {
    // setCategories(newValue.value);
    updateCategory(newValue.value);
  };
  return (
    <div>
      <SelectCustom
        classNamePrefix="custom-select"
        onChange={onChangr}
        // value={categories}
        options={operation === 'income' ? INCOME : EXPENSE}
        isSearchable={false}
        placeholder={'label category'}
      />
    </div>
  );
};
