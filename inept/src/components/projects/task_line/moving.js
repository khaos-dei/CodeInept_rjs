
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';

function MoveLine({feedback, depth, babyDepth, id, max_id, taskId}) {
    let Upper = (depth !== 0);
    let Up    = (id!==0);
    let Down  = (id!==max_id);
    let Lower = (depth !== 3)&&(depth+babyDepth!==3)&&(id!==0);
    console.log(taskId)


    return (
        <div className='TaskDDL'>
            <IconButton is="Seek" size='3vmin' onClick={()=>{feedback("upper")}} color={Upper?'black':'#CDCDCD'}  disabled={!Upper} deg={180} style={{ transform: " scaleX(-1)" }} />
            <IconButton is="Up"   size='3vmin' onClick={()=>{feedback("up")}}    color={Up?'black':'#CDCDCD'}     disabled={!Up} />
            <IconButton is="Down" size='3vmin' onClick={()=>{feedback("down")}}  color={Down?'black':'#CDCDCD'}   disabled={!Down} />
            <IconButton is="Seek" size='3vmin' onClick={()=>{feedback("lower")}} color={Lower?'black':'#CDCDCD'}  disabled={!Lower} style={{ transform: " scaleX(-1)" }}  /> 
        </div>
    );
}

export default MoveLine;