
import React, { useState, forwardRef} from 'react';
import IconButton from 'utils/IconButton';
import {IconNoButton} from 'utils/IconButton';
import write_date from 'utils/date';
import {now, long_ago} from 'constants/DateConsts';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DeadLine({ ddl, ddl_feedback}) {
    const [pick, showPick] = useState(false);
    
    function status_icon(){
        if(ddl < long_ago)
            return(<IconNoButton is="WarnBad" size='3vmin' color='ad0000' style={{marginRight: "0.5vmin"}}/>)
        if(ddl < now)
            return(<IconNoButton is="Warn" size='3vmin' color='ed6802' style={{marginRight: "0.5vmin"}}/>)
        return(<IconNoButton is="Time" size='3vmin' color='black' style={{marginRight: "0.5vmin"}}/> )
    }
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="DeadlineDate" onClick={onClick} ref={ref}>
            {status_icon()}&nbsp;{write_date(ddl)}  
        </button>
      ));

    if(ddl){
        return (
                <div className='TaskDDL'>
                <DatePicker selected={ddl} onChange={(date) => {ddl=date; ddl_feedback(date)}} customInput={<ExampleCustomInput />}/>
                </div>
                );
    }
}

export default DeadLine;