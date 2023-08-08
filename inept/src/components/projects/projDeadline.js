
import "./tasks_menu.css"
import React, { useState, forwardRef} from 'react';
import IconButton from 'utils/IconButton';
import {IconNoButton} from 'utils/IconButton';
import write_date from 'utils/date';
import {now, long_ago} from 'constants/DateConsts';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function DeadLine({ ddl, ddl_feedback}) {
    function numberRange (start, end) {
        return new Array(end - start).fill().map((d, i) => i + start);
      }
    const [pick, showPick] = useState(false);
    let date=ddl;
    const years =numberRange(1990, 2100);
    const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
    ];
    function status_icon(){
    if(ddl < long_ago)
            return(<IconNoButton is="WarnBad" size='2.5vmin' color='ad0000' style={{marginRight: "0.5vmin", marginTop:"0.5vmin"}}/>)
        if(ddl < now)
            return(<IconNoButton is="Warn" size='2.5vmin' color='ed6802' style={{marginRight: "0.5vmin", marginTop:"0.5vmin"}}/>)
        
        return(<IconNoButton is="Time" size='2.5vmin' color='black' style={{marginRight: "0.5vmin", marginTop:"0.5vmin"}}/> )
    }
    const ExistingInput = forwardRef(({ onClick }, ref) => (
        <button className="DeadlineDate" onClick={onClick} ref={ref}>
            {status_icon()}&nbsp;{write_date(ddl)}
        </button>
      ));

    const NewInput = forwardRef(({ onClick }, ref) => (
          <button className="DeadlineDate" onClick={onClick} ref={ref}>
              {<IconNoButton is="Time" size='2.5vmin' color='black' style={{marginRight: "0.5vmin"}}/>}  
          </button>
        ));

    return (
            <div style={{position:"absolute", top:"3vmin", left:"65%"}}  onMouseOverCapture={()=>{showPick(true)}} onMouseLeave={()=>{showPick(false)}}>
                {ddl && pick && <IconButton is="No" size='1.6vmin' color='blue' onClick={()=>{ddl_feedback(false)}}   style={{position: "relative", top:"-30%"}}/>} 
                <DatePicker
                popperPlacement="top-end" showPopperArrow={false} selected={ddl} onChange={(date) => {ddl=date; ddl_feedback(date)}} customInput={ddl?<ExistingInput />:<NewInput />} onCalendarOpen={() => {showPick(false)}} onCalendarClose={() => showPick(!pick)} /> &nbsp;
                
            </div>
            );
    }
export default DeadLine;