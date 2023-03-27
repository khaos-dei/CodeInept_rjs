import React, { useEffect, useState } from 'react'
import { render } from 'react-dom';
import {days} from '../constants/DateConsts';
import './m_prog_line.css';

function line_day(){
    return (
        <polygon points="10,10 50,10 50,20 60,30 50,40 50,50 10,50" style="fill:transparent;stroke:black;stroke-width:3;fill-rule:evenodd;"></polygon>
    );
}


function MonthProgressLine(props) {
    var year = props.datentime.getYear();
    var month = props.datentime.getMonth();
    var date = props.datentime.getDate();
    if((year % 4==0)&&(month==1)){month=12};//leap year
    return (
        <div className='Month_Progress_Line'>
            {date} out of {days[month]}
        </div>
    );
  }
  
  export default MonthProgressLine;