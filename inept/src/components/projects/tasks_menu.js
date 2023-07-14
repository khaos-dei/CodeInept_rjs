import './tasks_menu.css';
import React, {useState} from 'react';
import IconButton from 'utils/IconButton';

function TasksMenu({id, projectBulk}) {
    return(
        <div className='TasksGrid'>
            <div className='TasksGridLine'>
                <IconButton is="Unchecked" size='3vmin' color='black' style={{"grid-column-start": "1"}}/>

                <div className='TaskNameT0' style={{gridColumnStart: "2", gridColumnEnd:`span ${4}` }} >Test Task!</div>

                <div className='TasksButtonsLine'>
                <IconButton is="Add" size='3vmin' color='black' />
                <IconButton is="Rename" size='3vmin' color='black' />
                <IconButton is="Delete" size='3vmin' color='black' />
                <IconButton is="Rearrange" size='3vmin' color='black' />
                </div>
            </div>
            <div className='TasksGridLine'>
                <IconButton is="Checked" size='3vmin' color='black' style={{"grid-column-start": "2"}}/>

                <div className='TaskNameT0' style={{gridColumnStart: "3", gridColumnEnd:`span ${3}`}} > Test Task!</div>

                <div className='TasksButtonsLine'>
                <IconButton is="Add" size='3vmin' color='black' />
                <IconButton is="Rename" size='3vmin' color='black' />
                <IconButton is="Delete" size='3vmin' color='black' />
                <IconButton is="Rearrange" size='3vmin' color='black' />
                </div>
            </div>
            <div className='TasksGridLine'>
                <IconButton is="Unchecked" size='3vmin' color='black' style={{"grid-column-start": "3"}}/>

                <div className='TaskNameT0' style={{gridColumnStart: "4", gridColumnEnd:`span ${2}`}} >Test Task!</div>

                <div className='TasksButtonsLine'>
                <IconButton is="Add" size='3vmin' color='black' />
                <IconButton is="Rename" size='3vmin' color='black' />
                <IconButton is="Delete" size='3vmin' color='black' />
                <IconButton is="Rearrange" size='3vmin' color='black' />
                </div>
            </div>
            <div className='TasksGridLine'>
                <IconButton is="Checked" size='3vmin' color='black' style={{gridColumn: "4"}}/>

                <div className='TaskNameT0' style={{gridColumnStart: "5", gridColumnEnd:`span ${1}`}} >Test Task!</div>

                <div className='TasksButtonsLine'>
                <IconButton is="Add" size='3vmin' color='black' />
                <IconButton is="Rename" size='3vmin' color='black' />
                <IconButton is="Delete" size='3vmin' color='black' />
                <IconButton is="Rearrange" size='3vmin' color='black' />
                </div>
            </div>
        </div>
    );
  }
  
  export default TasksMenu;