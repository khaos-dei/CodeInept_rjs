import './project_line.css';
import React from 'react';
import IconButton from 'utils/IconButton';

function ProjectLine({id, projectBulk, setactiveProj}) {

    var progress_percent = Math.round( calculate_progress(projectBulk[id].parts)*10000 )/100
    
    function calculate_progress(list){
        if(list.length===0){
            return 0;
        }
        var percent=0;
        for(const element of list){
            percent+=element.completed? 1 : calculate_progress(element.sub)*element.sub.length/(element.sub.length+1);
        } 
        return (percent/list.length);
    }

    return(
                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'>
                        <div className='ProjectName'>{projectBulk[id].name}</div>
                        <IconButton is="Overview" size='3vmin' />
                        <IconButton is="MenuView" onClick={() => setactiveProj(id)} size='3vmin' />
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressColor' style={{ width:(progress_percent+"%")}}>{progress_percent+"%"}</div>
                    </div>
                </div>
    );
  }
  
  export default ProjectLine;