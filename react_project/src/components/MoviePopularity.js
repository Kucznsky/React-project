import { useState } from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const PopularityCalendar = () => {
    const [selectedDate, SetSelectedDate] = useState(null);

  return (
    <div className>
      <label>Pick a date to see how movies were seling in the specyfic day</label>
      <DatePicker 
        selected={selectedDate} 
        onChange={date => SetSelectedDate(date)}
        dateFormat='dd.MM.yyyy'
        maxDate={new Date()}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      /> 
    </div>
  );
};

export default PopularityCalendar;