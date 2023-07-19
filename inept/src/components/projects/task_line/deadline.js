
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';
import write_date from 'utils/date';

function DeadLine({ ddl }) {
    if(ddl){
        var now = new Date();
        var long_ago = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 14);
        now.setHours(0, 0, 0, 0);
        long_ago.setHours(0, 0, 0, 0);
        return (
                <div className='TaskDDL'>
                <IconButton is={(ddl < long_ago) ? "WarnBad" : "Warn"} size='3vmin' color={(ddl < long_ago) ? "ad0000" : "ed6802"} visible={(ddl < now)} />
                    <IconButton is="Time" size='3vmin' color='black' /> 
                    {write_date(ddl)}
                </div>
                );
    }
}

export default DeadLine;