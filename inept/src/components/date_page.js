import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
import {dates, weekdays, months} from '../constants/DateConsts';
import './date_page.css';

function DatePage() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);//new state every 30 seconds(cannot set it to a min, the app may be started at the latter half of a second)
    }, []);//all of this wl later get moved to the broader "right up" function
    var year = dateState.getHours();//wlb func input
    var month = months[dateState.getMonth()];//wlb func inpu
    var weekday = weekdays[dateState.getDay()-1];//wlb func input
    var date = dates[dateState.getDate()-1];//wlb func input
    return (
        <div className='Calendar_Page'>
            <div className='Decorative_Line'></div>
            <div className='Day'>{date}</div>
            <div className='Month'>{month}</div>
            <div className='Weekday'>{weekday}</div>
            <div className='Year'>2023</div>
        </div>
    );
  }
  
  export default DatePage;