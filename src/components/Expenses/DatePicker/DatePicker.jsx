import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiOutlineCalendar } from 'react-icons/ai';
import { DateWrapper } from '../DatePicker/DatePicker.styled';

export const Calendar = ({ value, changeValue }) => {
  return (
    <DateWrapper>
      <AiOutlineCalendar />
      <DatePicker
        maxDate={new Date()}
        selected={value}
        onChange={date => changeValue(date)}
        dateFormat="dd.MM.yyyy"
      />
    </DateWrapper>
  );
};
