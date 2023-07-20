
import React, { useState, forwardRef} from 'react';
import IconButton from 'utils/IconButton';
import {IconNoButton} from 'utils/IconButton';
import write_date from 'utils/date';
import {now, long_ago} from 'constants/DateConsts';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function DeadLine({ ddl, ddl_feedback}) {
    const [pick, showPick] = useState(false);
    
    function status_icon(){
        if(ddl < long_ago)
            return(<IconNoButton is="WarnBad" size='2.5vmin' color='ad0000' style={{marginRight: "0.5vmin"}}/>)
        if(ddl < now)
            return(<IconNoButton is="Warn" size='2.5vmin' color='ed6802' style={{marginRight: "0.5vmin"}}/>)
        return(<IconNoButton is="Time" size='2.5vmin' color='black' style={{marginRight: "0.5vmin"}}/> )
    }
    const ExistingInput = forwardRef(({ onClick }, ref) => (
        <button className="DeadlineDate" onClick={onClick} ref={ref}>
            {status_icon()}&nbsp;{write_date(ddl)}&nbsp;
        </button>
      ));

    const NewInput = forwardRef(({ onClick }, ref) => (
          <button className="DeadlineDate" onClick={onClick} ref={ref}>
              {<IconNoButton is="Time" size='2.5vmin' color='black' style={{marginRight: "0.5vmin"}}/>}  
          </button>
        ));

    return (
            <div className='TaskDDL'>
                
                {pick &&<IconButton is="No" size='2.5vmin' color='blue' onClick={ddl_feedback(false)}   style={{marginRight: "0.5vmin"}}/>}
                <DatePicker showPopperArrow={false} selected={ddl} onChange={(date) => {ddl=date; ddl_feedback(date)}} customInput={ddl?<ExistingInput />:<NewInput />} onCalendarOpen={() => {showPick(true)}} onCalendarClose={() => showPick(false)}/>
                
            </div>
            );
    }
export default DeadLine;