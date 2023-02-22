import React from 'react';
import { 
    // InputProductDescription,
    // SelectProductCategory,
    // InputCalk,
    InputWrapper,
  } from '../InputWraper/InputWraper.styled';

  export const InputWraper = () => {
    return (
        <>
            <InputWrapper>
            <input type="text" name="username" placeholder="Product description" />
            {/* <DescriptionInputDesktop></DescriptionInputDesktop>
            <ExpensesOption></ExpensesOption>
            <CategoryName></CategoryName> */}
            </InputWrapper>
            
        </>
    )
  };
  