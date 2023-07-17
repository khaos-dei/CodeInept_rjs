import './task_line.css';
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';

function TaskLine({ depth, name, id, max_id, check, feedback, onMove}) {
    return (
            <div className='TasksGridLine'>
                <IconButton is={check ? "Checked" : "Unchecked"} size='3vmin' color='black' style={{ gridColumnStart: depth }} />

                <div className='TaskName' style={{ gridColumnStart: depth + 1, gridColumnEnd: `span ${5 - depth}` }} >{name}</div>
            
                <div className='TaskDDL' ><IconButton is="Checked" size='2vmin' color='black' /> 27.11.01 12:13</div>

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