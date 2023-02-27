import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import {
  DateWrapper
} from '../DatePicker/DatePicker.styled';

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DateWrapper>
      <AiOutlineCalendar />
      <DatePicker
        maxDate={new Date()}
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </DateWrapper>
  );
};
