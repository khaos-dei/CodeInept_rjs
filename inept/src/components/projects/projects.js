import './projects.css';
import Dialog from 'utils/dialogue';
import React, { useState, useEffect} from 'react';
import IconButton from 'utils/IconButton';
import ProjectLine from './project_line';
import TasksMenu from './tasks_menu';
import { getFromLS, setToLS } from 'utils/localstorage_component';
import write_date from 'utils/date';


function Fix_Dates(list) {
    if ((!list)&&(list.length == 0)){
        return;
    }
    for (const element of list) {
        if (element.deadline){
            element.deadline = new Date(element.deadline);
        }
        Fix_Dates(element.tasks);
    }
    return (list);
}

function Projects(props) {
    const [showDialog, setShowDialog] = useState(false);
    const [showMiniDialog, setShowMiniDialog] = useState(false);
    const [taskmoved, setTaskMoved] = useState(false);
    const [newName, setnewName] = useState("Project");
    const [activeProj, setactiveProj] = useState(-1);
    const [projectBulk, setprojectBulk] = useState(Fix_Dates(getFromLS("Project-List")));

    useEffect(() => {
        (activeProj!==-1 && setShowDialog(true));
    }, [activeProj])
    

    function closeDialog(){
        setShowDialog(false);
        setactiveProj(-1);
    }

    function searchTaskById(taskId, task, depth){
        if((depth===4)||(taskId[depth+1]===-1)){return(task[taskId[depth]]);}
        return(searchTaskById(taskId, task[taskId[depth]].tasks,depth+1))
    }

    function daddifyTaskId(taskId){
        var DadTaskID=[... taskId];
        for(let i = 0; i < DadTaskID.length-1; i++){
            if(DadTaskID[i+1]==-1){
                DadTaskID[i]=-1;
                return(DadTaskID);
            }
        }
        DadTaskID[DadTaskID.length-1]=-1;
        return(DadTaskID);
    }
    function oneeSanTaskId(taskId){
        var oneeTaskId=[... taskId];
        for(let i = 0; i < oneeTaskId.length-1; i++){
            if(oneeTaskId[i+1]==-1){
                oneeTaskId[i]-=1;
                return(oneeTaskId);
            }
        }
        oneeTaskId[oneeTaskId.length-1]-=1;
        return(oneeTaskId);
    }
    function oniiChanTaskId(taskId){
        var oniiTaskId=[... taskId];
        for(let i = 0; i < oniiTaskId.length-1; i++){
            if(oniiTaskId[i+1]==-1){
                oniiTaskId[i]+=1;
                return(oniiTaskId);
            }
        }
        oniiTaskId[oniiTaskId.length-1]+=1;
        return(oniiTaskId);
    }

    function childId(taskId){
        for(let i = 0; i < taskId.length-1; i++){
            if(taskId[i+1]===-1){
                return(taskId[i]);
            }
        }
        return(taskId[taskId.length-1]);
    }

    function changeToProjectData(taskId,change, value){
        var deep_copy_projectBulk = JSON.parse(JSON.stringify(projectBulk));
        //console.log(taskId)
        var theTask = searchTaskById(taskId, deep_copy_projectBulk, 0);
        var dadTask = searchTaskById(daddifyTaskId(taskId), deep_copy_projectBulk,0) 
        var id = childId(taskId);
        var freshTask = {
            name: "Fresh task",
            deadline: false,
            completed: false,
            tasks: [],
          }
        switch (change){
            case 'deadline':
                theTask.deadline=value;
                setprojectBulk(Fix_Dates(deep_copy_projectBulk));
                setToLS("Project-List", deep_copy_projectBulk);
                return;
            case 'rename':
                theTask.name=value;
                setprojectBulk(Fix_Dates(deep_copy_projectBulk));
                setToLS("Project-List", deep_copy_projectBulk);
                return;
            case 'new':
                theTask.tasks.push(freshTask);
                setprojectBulk(Fix_Dates(deep_copy_projectBulk));
                setToLS("Project-List", deep_copy_projectBulk);
                return;
            case 'lower':
                dadTask.tasks[id-1].tasks.push(theTask);
                if(id>0){dadTask.tasks.splice(id, id);}else{dadTask.tasks.shift()}
                setprojectBulk(Fix_Dates(deep_copy_projectBulk));
                setToLS("Project-List", deep_copy_projectBulk);
                setTaskMoved(true);
                return;
            case 'up':
                dadTask.tasks[id] = dadTask.tasks.splice(id-1,1,theTask)[0];
                setprojectBulk(Fix_Dates(deep_copy_projectBulk));
                setToLS("Project-List", deep_copy_projectBulk);
                setTaskMoved(true);
                return;
            case 'down':
                dadTask.tasks[id] = dadTask.tasks.splice(id+1,1,theTask)[0];
                setprojectBulk(Fix_Dates(deep_copy_projectBulk));
                setToLS("Project-List", deep_copy_projectBulk);
                setTaskMoved(true);
                return;
            case 'upper':
                var grandDadTask = searchTaskById(daddifyTaskId(daddifyTaskId(taskId)), deep_copy_projectBulk,0) 
                var dadid = childId(daddifyTaskId(taskId));
                grandDadTask.tasks.splice(dadid+1,0,theTask);
                if(id>0){dadTask.tasks.splice(id, id);}else{dadTask.tasks.shift()}
                setprojectBulk(Fix_Dates(deep_copy_projectBulk));
                setToLS("Project-List", deep_copy_projectBulk);
                setTaskMoved(true);
                return;
            case 'delete':
                if(id>0){dadTask.tasks.splice(id, id);}else{dadTask.tasks.shift()}
                setprojectBulk(Fix_Dates(deep_copy_projectBulk));
                setToLS("Project-List", deep_copy_projectBulk);
                return;
            case 'completed':
                theTask.completed=value;
                setprojectBulk(Fix_Dates(deep_copy_projectBulk));
                setToLS("Project-List", deep_copy_projectBulk);
                return;
            default:
                console.log("caught a random default");
        }
    }

    return(

        <div className='Projects'>
            <Dialog /* Note Menu */
            header={projectBulk[0].name + " [due " + write_date(projectBulk[0].deadline) +"]"}
            body={<TasksMenu id={0} project={projectBulk[0]} feedback={changeToProjectData} smthchanged={taskmoved} />} 
            width={90}
            open={showDialog} 
            callback={closeDialog}
            />

            <div className='ProjectsGrid'>
                <ProjectLine id={0} projectBulk={projectBulk} setactiveProj={setactiveProj}/>
            

                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'> 
                    <IconButton is="Add" size='3vmin' />
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Projects;