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
                                                                                        console.log(taskId);
                                                                                        console.log(task);
                                                                                        console.log(depth);
        if((depth===4)||(taskId[depth+1]===-1)){return(task[taskId[depth]]);}
        return(searchTaskById(taskId, task[taskId[depth]].tasks,depth+1))
    }
    function changeToProjectData(taskId,change, value){
        var deep_copy_projectBulk = JSON.parse(JSON.stringify(projectBulk));
        console.log(value)
        var theTask = searchTaskById(taskId, deep_copy_projectBulk, 0);
        switch (change){
            case 'deadline':
                theTask.deadline=value;
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
            body={<TasksMenu id={0} project={projectBulk[0]} feedback={changeToProjectData} />} 
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