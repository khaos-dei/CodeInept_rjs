import './projects.css';

function Projects(props) {

    return(
        <div className='Projects'>
            <div className='Projectsa'>
                <div className='ProgressBar'><div className='ProgressColor' style={{ width:"50%"}}/></div>
                <div className='ProgressBar'><div className='ProgressColor' style={{ width:"25%"}}/></div>
                <div className='ProgressBar'><div className='ProgressColor' style={{ width:"80%"}}/></div>
                <div className='ProgressBar'><div className='ProgressColor'/></div>
            </div>
        </div>
    );
  }
  
  export default Projects;