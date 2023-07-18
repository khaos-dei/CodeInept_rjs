import './task_line.css';
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';

function TaskLine({ depth, name, id, max_id, check, feedback, onMove}) {

    return (
            <div className='TasksGridLine'>
                <IconButton is={check ? "Checked" : "Unchecked"} size='3vmin' color='black' style={{ gridColumnStart: depth }} />

                <div className='TaskName' style={{ gridColumnStart: depth + 1, gridColumnEnd: `span ${5 - depth}` }} >{name}</div>
            
                {/* <div className='TaskWarning'><IconButton is="Warn" size='3vmin' color='ed6802' /></div> */}
                {/* <div className='TaskWarning'><IconButton is="WarnBad" size='3vmin' color='ad0000'/></div> */}
                <div className='TaskDDL'> 
                {/* <IconButton is="Warn" size='3vmin' color='ed6802' /> <IconButton is="Time" size='3vmin' color='black' /> 27.11.01 */}
                <IconButton is="Movmp" size='3vmin' color='black' deg={225} visible={depth != 1} /> <IconButton is="Up" size='3vmin' color='black' /> <IconButton is="Down" size='3vmin' color='black' /> <IconButton is="Movmp" size='3vmin' color='black' deg={135} visible={depth != 4} />
                {/* <div className='VarietyButtonLine'> <div style={{ padingRight: "1vmin", gridColumnEnd: 'span 2'}}>Delete?</div> <IconButton is="Yes" size='3vmin' color='black' /> <IconButton is="No" size='3vmin' color='black' /> </div> */}
                {/* <div className='VarietyButtonLine'> <div style={{ paddingRight: "1vmin", gridColumnEnd: 'span 2'}}>Rename?</div> <IconButton is="Yes" size='3vmin' color='black' /> <IconButton is="No" size='3vmin' color='black' /> </div> */}
                </div>

                <div className='TasksButtonsLine'>
                    <IconButton is="Add" size='3vmin' color='black' />
                    <IconButton is="Rename" size='3vmin' color='black' />
                    <IconButton is="Delete" size='3vmin' color='black' />
                    <IconButton is="Rearrange" size='3vmin' color='black' />
                </div>
            </div>
    );
}

export default TaskLine;