import './tasks_menu.css';
import React, {useState} from 'react';
import IconButton from 'utils/IconButton';
import TaskLine from './task_line';

function TasksMenu({id, projectBulk}) {
    return(
        <div className='TasksGrid'>
            <TaskLine depth={1} name='Test Task!' check={false} />
            <TaskLine depth={2} name='Test Task!' check={false} />
            <TaskLine depth={3} name='Test Task!' check={false} />
            <TaskLine depth={4} name='Can have a super long name!' check={false} />
            <TaskLine depth={1} name='Test Task!' check={false} />
            <TaskLine depth={1} name='Test Task!' check={false} />
            <TaskLine depth={1} name='Test Task!' check={false} />
        </div>
    );
  }
  
  export default TasksMenu;