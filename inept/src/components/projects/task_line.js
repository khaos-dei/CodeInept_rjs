import './task_line.css';
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';
import DeadLine from './task_line/deadline';
import DeleteLine from './task_line/deleting';
import RenameLine from './task_line/renaming';
import MoveLine from './task_line/moving';

function TaskLine({ depth, name, id, max_id, check, feedback, onMove, task, babyDepth, taskId}) {

    function changeDeadline(newDdl){
        feedback(taskId, "deadline", newDdl);
    }
    function checkMark(){
        feedback(taskId, "completed", !check);
    }

    return (
            <div className='TasksGridLine'>
                <IconButton is={check ? "Checked" : "Unchecked"} onClick={checkMark} size='3vmin' color='black' style={{ gridColumnStart: depth+1 }} />

                {/* <div className='TaskName' style={{ gridColumnStart: depth + 2, gridColumnEnd: `span ${4 - depth}` }} >{name +" | "+ taskId }</div>*/}
                <div className='TaskName' style={{ gridColumnStart: depth + 2, gridColumnEnd: `span ${4 - depth}` }} >{name}</div>
            
                <DeadLine ddl={task.deadline} ddl_feedback={changeDeadline}/>

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