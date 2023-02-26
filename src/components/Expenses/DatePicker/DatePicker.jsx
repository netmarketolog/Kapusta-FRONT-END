import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { DateWrapper } from '../DatePicker/DatePicker.styled';
import style from '../DatePicker/DatePicker.module.css';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DateWrapper>
      <AiOutlineCalendar />
      <DatePicker
        maxDate={new Date()}
        selected={startDate}
        className={style.pickerStyle}
        onChange={date => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </DateWrapper>
  );
};
