import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
import './ana_clck.css';

function AnaClock() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDateState(new Date()), 30000);//new state every 30 seconds(cannot set it to a min, the app may be started at the latter half of a second)
    }, []);//all of this wl later get moved to the broader "right up" function

    var hrs = dateState.getHours();//wlb func input
    var mins = dateState.getMinutes();//wlb func input
    hrs = 180+30*hrs+mins/2; 
    mins = 180+mins*6; 
    return (
     <div className='Analogue_Clock'>
        <div className='clck-body' style={{top: 10, left: 10}}></div>
        <div className='HR-hand' style={{top: 60, left: 57, transform: `rotate(${hrs}deg)`}}></div>
        <div className='MN-hand' style={{top: 60, left: 58, transform: `rotate(${mins}deg)`}}></div>
    </div>
    );
  }

  export default AnaClock;