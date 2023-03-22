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

    return (
     <div>{hrs+':'+mins}</div>
    );
  }

  export default AnaClock;