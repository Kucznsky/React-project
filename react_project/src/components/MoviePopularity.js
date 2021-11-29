import { useState } from 'react';
import Calendar from 'react-calendar';

const PopularityCalendar = () => {
    const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className='center'>
      <Calendar showWeekNumbers onChange={onChange} value={date} />
    </div>
  );
};

export default PopularityCalendar;