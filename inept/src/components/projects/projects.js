import './projects.css';
import IconButton from 'utils/IconButton';

function Projects(props) {

    return(
        <div className='Projects'>
            <div className='ProjectsGrid'>
                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'>
                        <div className='ProjectName'>Project Big</div>
                        <IconButton is="Overview" size='3vmin' />
                        <IconButton is="MenuView" size='3vmin' />
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressColor' style={{ width:"17%"}}/>
                    </div>
                </div>
            

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