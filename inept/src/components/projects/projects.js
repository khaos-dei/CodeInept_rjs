import './projects.css';
import Dialog from 'utils/dialogue';
import React, { useState, useEffect} from 'react';
import IconButton from 'utils/IconButton';
import ProjectLine from './project_line';
import TasksMenu from './tasks_menu';
import { getFromLS, setToLS } from 'utils/localstorage_component';
import write_date from 'utils/date';


function Projects(props) {
    const [showDialog, setShowDialog] = useState(false);
    const [showMiniDialog, setShowMiniDialog] = useState(false);
    const [newName, setnewName] = useState("Project");
    const [activeProj, setactiveProj] = useState(-1);
    const [projectBulk, setprojectBulk] = useState(getFromLS("Project-List"));

    useEffect(() => {
        (activeProj!==-1 && setShowDialog(true));
    }, [activeProj])

    function closeDialog(){
        setShowDialog(false);
        setactiveProj(-1);
    }

    return(

        <div className='Projects'>
            <Dialog /* Note Menu */
            header={projectBulk[0].name + " [due " + write_date(projectBulk[0].deadline) +"]"}
            body={<TasksMenu id={0} projectBulk={projectBulk[0]} />} 
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