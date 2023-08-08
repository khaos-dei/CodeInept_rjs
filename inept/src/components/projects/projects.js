import './projects.css';
import Dialog from 'utils/dialogue';
import MiniDialog from 'utils/mini_dialogue';
import React, { useState, useEffect} from 'react';
import IconButton from 'utils/IconButton';
import ProjectLine from './project_line';
import TasksMenu from './tasks_menu';
import { getFromLS, setToLS } from 'utils/localstorage_component';
import write_date from 'utils/date';
import DeadLine from './projDeadline';
import DeleteLine from './task_line/deleting';
import RenameLine from './task_line/renaming';


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
    const [showMiniDelete, setShowMiniDelete] = useState(false);
    const [showMiniRename, setShowMiniRename] = useState(false);
    const [taskmoved, setTaskMoved] = useState(false);
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
        for(let i = 1; i < DadTaskID.length-1; i++){
            if(DadTaskID[i+1]==-1){
                DadTaskID[i]=-1;
                return(DadTaskID);
            }
        }
        DadTaskID[DadTaskID.length-1]=-1;
        return(DadTaskID);
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
        var theTask = searchTaskById(taskId, deep_copy_projectBulk, 0);
        var dadTask = searchTaskById(daddifyTaskId(taskId), deep_copy_projectBulk,0);
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


    function projectLines(){
        let tempContent=[]
        for (let i = 0; i < projectBulk.length; i++) {
            tempContent.push(<ProjectLine id={i} projectBulk={projectBulk} setactiveProj={setactiveProj}/>);
        }
        return tempContent;
    }


    function freshProject(){
        var newProj = {
            name: "New Project",
            deadline: false,
            tasks: [],
          }
        var deep_copy_projectBulk = JSON.parse(JSON.stringify(projectBulk));
        deep_copy_projectBulk.push(newProj);
        setprojectBulk(Fix_Dates(deep_copy_projectBulk));
        setToLS("Project-List", deep_copy_projectBulk);
    }
    function changeProjectDdl(value){
        changeToProjectData([activeProj,-1,-1,-1,-1], "deadline" , value);
    }
    function DeleteProject(){
        let id = activeProj;
        var deep_copy_projectBulk = JSON.parse(JSON.stringify(projectBulk));
        if(id>0){deep_copy_projectBulk.splice(id, id);}else{deep_copy_projectBulk.shift()}
        setprojectBulk(Fix_Dates(deep_copy_projectBulk));
        setToLS("Project-List", deep_copy_projectBulk);
    }
    function RenameProject(value){
        let id = activeProj;
        const theNewName = document.getElementById("RenameProject").value;
        var deep_copy_projectBulk = JSON.parse(JSON.stringify(projectBulk));
        deep_copy_projectBulk[id].name = theNewName;
        setprojectBulk(Fix_Dates(deep_copy_projectBulk));
        setToLS("Project-List", deep_copy_projectBulk);
        setShowMiniRename(false);
    }

    return(

        <div className='Projects'>     
            {projectBulk.length>0 && activeProj>-1 && <Dialog /* Note Menu */
            header={projectBulk[activeProj].name}
            headerSpecial={
                <DeadLine ddl={projectBulk[activeProj].deadline} ddl_feedback={changeProjectDdl}/> 
            }
            headerAddition={
                <div style={{display:"inline", float:"right", marginRight:"9%"}}>
                 &nbsp; &nbsp;
                <IconButton is="Rename" onClick={()=>{setShowMiniRename(true)}} size='3vmin' color='black' />
                <IconButton is="Delete" onClick={()=>{setShowMiniDelete(true)}} size='3vmin' color='black' />
                <IconButton is="Rearrange" size='3vmin' color='black' visible={false} />
                </div>
            }
            body={<TasksMenu id={activeProj} project={projectBulk[activeProj]} feedback={()=>{}} smthchanged={taskmoved} />} 
            width={90}
            open={showDialog} 
            callback={closeDialog}
            />}
            {projectBulk.length>0 && activeProj>-1  &&<Dialog /* Rename Project? */
            header={"Rename Project?"}
            body={
                <>
                <input id={"RenameProject"} name="TaskName" defaultValue={projectBulk[activeProj].name} style={{fontSize:"3vmin"}}></input> &nbsp; &nbsp;
                <IconButton is="Yes" onClick={()=>{RenameProject()}} size='3vmin' color='black' /> &nbsp; &nbsp;
                <IconButton is="No"  onClick={()=>{setShowMiniRename(!showMiniRename)}} size='3vmin' color='black' />
                </>
            }
            open={showMiniRename}
            callback={setShowMiniRename}
            width={40}
            background_color="gray"
            />}
            <Dialog /* Delete Project? */
            header={"Delete Project?"}
            body={
                <>
                <IconButton is="Yes" onClick={DeleteProject} size='3vmin' color='black' /> &nbsp; &nbsp;
                <IconButton is="No"  onClick={()=>{setShowMiniDelete(!showMiniDelete)}} size='3vmin' color='black' />
                </>
            }
            open={showMiniDelete}
            callback={setShowMiniDelete}
            width={40}
            background_color="gray"
            />
            <div className='ProjectsGrid'>
                
                {projectLines()}

                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'> 
                    <IconButton is="Add" onClick={freshProject} size='3vmin' />
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Projects;