import DatePicker from 'react-datepicker'
import { useState, useEffect} from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { DateWrapper} from '../DatePicker/DatePicker.styled'

const datePicker = ({ handleDate }) => { 
  const [date, setDate] = useState(new Date())

  useEffect(() => handleDate(date))

  return (
    <DateWrapper>
      <AiOutlineCalendar />
      <DatePicker
        maxDate={new Date()}
        selected={date}
        onChange={date => setDate(date)}
        dateFormat="dd/MM/yyyy"
      />
    </DateWrapper>
  )
}

export default datePicker