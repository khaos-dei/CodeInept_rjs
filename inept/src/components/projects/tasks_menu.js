import './tasks_menu.css';
import React, {useState} from 'react';
import IconButton from 'utils/IconButton';
import TaskLine from './task_line';

function TasksMenu({id, project, feedback}) {

     function taskChange(taskId, change, value){
        feedback([id, ... taskId], change, value);
    } 

    var BabyDepth=0;
    var taskId=[0,0,0,0];
    function show_tasks(list, depth) {
        let content = [];
        if (list.length != 0){
            for (const element of list) {
                let tempContent=[]
                tempContent.push(show_tasks(element.tasks, depth+1));//the element babies
                tempContent.unshift(
                <TaskLine
                    task={element}
                    check={element.completed}
                    name={element.name} 
                    depth={depth}
                    babyDepth={BabyDepth-depth-1} 
                    taskId={[
                        taskId[0],depth>0?taskId[1]:-1,depth>1?taskId[2]:-1,depth>2?taskId[3]:-1
                    ]}
                    feedback={taskChange}
                    />);//the element itself
                taskId[depth]+=1;
                content.push(tempContent);
            }
        }else{
            taskId=[depth<1?0:taskId[0],depth<2?0:taskId[1],depth<3?0:taskId[2],depth<4?0:taskId[3]];
            BabyDepth=depth;
        }
        return content;
    }

    return(
        <div className='TasksGrid'>
            {show_tasks(project.tasks, 0)}
            <div className='TasksGridLine'>
                <IconButton is="Add" size='3vmin' color='black' />
                <div className='TaskName' style={{gridColumnEnd: `span 5`, fontSize:"2.8vmin"}} > New task?</div>
            </div>
        </div>
    );
  }
  
  export default TasksMenu;