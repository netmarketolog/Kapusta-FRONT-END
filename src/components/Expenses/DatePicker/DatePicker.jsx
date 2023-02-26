import React from 'react';
import DatePicker from 'react-datepicker';
import { 
  Container,
  IconDate,
  } from '../DatePicker/DatePicker.styled';
import Styles from './DatePicker.module.css';
import "react-datepicker/dist/react-datepicker.css";

// import { 
//   InputWraper
// } from '../InputWraper/InputWraper';

  export const DatePickerCustom = ({ startDate, handleChange }) => (
    <Container>
      <IconDate></IconDate>
      <DatePicker
        className={Styles.picker}
        selected={startDate}
        onChange={handleChange}
        dateFormat="dd.MM.yyyy"
        name="date"
        fixedHeight
        withPortal
      />
      {/* <InputWraper></InputWraper> */}
    </Container>
  );
  