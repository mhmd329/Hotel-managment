import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { BsCalendar } from 'react-icons/bs';
import '../datepicker.css'
const CheckOut = () => {
  const [startDate,setStartDate] = useState(false)
  return <div className="relative flex items-center justify-end h-full">
    <div className="absolute z-10 pr-8">
      <div>
        <BsCalendar className="text-accent text-base"/>
      </div>
    </div>
    <DatePicker className="w-full h-full" selected={startDate} placeholderText="check out" onChange={(date)=>setStartDate(date)}/>
  </div>;
};

export default CheckOut;