// import { useEffect } from 'react';
import { useState } from 'react';
import { SelectCustom } from './ProductCategori';
import { defaultItems } from './DefaultItem';
import React from 'react';
export const ProductCategori = () => {
  const [categories, setCategories] = useState('label category');
  const getValue = () => {
    return categories
      ? defaultItems.find(categorie => categorie.value === categories)
      : '';
  };
  const onChangr = newValue => {
    setCategories(newValue.value);
  };
  return (
    <div>
      <SelectCustom
        classNamePrefix="custom-select"
        onChange={onChangr}
        value={getValue()}
        options={defaultItems}
        isSearchable={false}
        placeholder={'label category'}
      />
    </div>
  );
};
