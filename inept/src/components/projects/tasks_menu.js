import './tasks_menu.css';
import React, {useState} from 'react';
import IconButton from 'utils/IconButton';
import TaskLine from './task_line';


function show_tasks(list, depth) {
    let content = [];
    if (list.length != 0)
        for (const element of list) {
            content.push(<TaskLine depth={depth} name={element.name} check={element.completed} task={element}/>);//the element itself
            content.push(show_tasks(element.tasks, depth+1));//the element babies
        }
    return content;
}


function TasksMenu({id, projectBulk}) {
    return(
        <div className='TasksGrid'>
            {show_tasks(projectBulk.tasks, 1)}
            <div className='TasksGridLine'>
                <IconButton is="Add" size='3vmin' color='black' />
                <div className='TaskName' style={{gridColumnEnd: `span 5`, fontSize:"2.8vmin"}} > New task?</div>
            </div>
        </div>
    );
  }
  
  export default TasksMenu;