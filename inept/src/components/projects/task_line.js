import './task_line.css';
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';
import DeadLine from './task_line/deadline';
import DeleteLine from './task_line/deleting';
import RenameLine from './task_line/renaming';
import MoveLine from './task_line/moving';

function TaskLine({ depth, name, id, max_id, check, feedback, onMove, task, babyDepth, taskId}) {
    const [showVariety, setVariety] = useState("deadline");
    

    function changeDeadline(newDdl){
        feedback(taskId, "deadline", newDdl);
    }
    function rename(){
        const theNewName = document.getElementById("Rename" + taskId).value;
        feedback(taskId, "rename", theNewName);
        setVariety("deadline");
    }
    function checkMark(){
        feedback(taskId, "completed", !check);
    }
    function newTask(){
        feedback(taskId, "new", false);
    }
    function moveTask(type){
        feedback(taskId, type, false);
    }

    function deleteTask(){
        feedback(taskId, "delete", false);
    }

    function varietyLine(){
        switch(showVariety){
            case "delete":
                return(<DeleteLine feedback={deleteTask} cancelback={setVariety}/>)
            case "move":
                return(<MoveLine taskId={taskId} feedback={moveTask} depth={depth} babyDepth={babyDepth} id={taskId[depth]} max_id={max_id}/>)
            case "rename":
                return(<RenameLine renameID={"Rename" + taskId} feedback={rename} cancelback={setVariety}/>)
            default: //deadline
                return(<DeadLine ddl={task.deadline} ddl_feedback={changeDeadline}/>)

        }
    }

    return (
            <div className='TasksGridLine'>
                <IconButton is={check ? "Checked" : "Unchecked"} onClick={checkMark} size='3vmin' color='black' style={{ gridColumnStart: depth+1 }} />

                {showVariety==='rename' ? <input id={"Rename" + taskId} name="TaskName" style={{ gridColumnStart: depth + 2, gridColumnEnd: `span ${4 - depth}` }} defaultValue={name}></input> : <div className='TaskName' style={{ gridColumnStart: depth + 2, gridColumnEnd: `span ${4 - depth}` }} >{name + "|" + taskId}</div> }

                {varietyLine()}

                <div className='TasksButtonsLine'>
                    <IconButton is="Add" size='3vmin' onClick={newTask}  color={depth<3?'black':'#CDCDCD'} disabled={depth===3} />
                    <IconButton is="Rename" size='3vmin' onClick={()=>{setVariety(showVariety==="rename"? "deadline":"rename")}} color='black' />
                    <IconButton is="Delete" size='3vmin' onClick={()=>{setVariety(showVariety==="delete"? "deadline":"delete")}} color='black' />
                    <IconButton is="Rearrange" size='3vmin' onClick={()=>{setVariety(showVariety==="move"? "deadline":"move")}} color='black' />
                </div>
            </div>
    );
}

export default TaskLine;