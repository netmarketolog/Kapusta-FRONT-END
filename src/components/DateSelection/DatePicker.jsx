import DatePicker from 'react-datepicker';
import { useState, useEffect } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { dateWrapper } from '../DateSelection/DatePicker.styled';

const datePicker = ({ handleDate }) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => handleDate(date));

  return (
    <dateWrapper>
      <AiOutlineCalendar />
      <DatePicker
        maxDate={new Date()}
        selected={date}
        onChange={date => setDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </dateWrapper>
  );
};

export default datePicker;
