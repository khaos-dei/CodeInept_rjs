import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
import './digi-clck.css';

function DigiClock() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);//new state every 30 seconds(cannot set it to a min, the app may be started at the latter half of a second)
    }, []);//all of this wl later get moved to the broader "right up" function

    var hrs = dateState.getHours();//wlb func input
    hrs = ((hrs < 10) ? '0' + hrs : hrs);//yes, two lines, but avoid double .getHours() call
    var mins = dateState.getMinutes();//wlb func input
    mins = ((mins < 10) ? '0' + mins : mins);//yes, two lines, but avoid double .getHours() call
    var time = hrs + ':' + mins;
    return (
     <div className='a-box'>{time}</div>
    );
  }

  export default DigiClock;