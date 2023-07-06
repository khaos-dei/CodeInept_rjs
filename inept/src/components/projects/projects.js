import './projects.css';
import {Icon} from 'constants/Icons';

function Projects(props) {

    return(
        <div className='Projects'>
            <div className='ProjectsGrid'>
                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'>
                        <div className='ProjectName'>Project Big</div>
                        <button className='TButton'>{Icon("Overview","3vmin")}</button>
                        <button className='TButton'>{Icon("MenuView","3vmin")}</button>
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressColor' style={{ width:"17%"}}/>
                    </div>
                </div>
                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'>
                        <div className='ProjectName'>Project Big</div>
                        <button className='TButton'>{Icon("Overview","3vmin")}</button>
                        <button className='TButton'>{Icon("MenuView","3vmin")}</button>
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressColor' style={{ width:"46%"}}/>
                    </div>
                </div>
                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'>
                        <div className='ProjectName'>Project Big</div>
                        <button className='TButton'>{Icon("Overview","3vmin")}</button>
                        <button className='TButton'>{Icon("MenuView","3vmin")}</button>
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressColor' style={{ width:"89%"}}/>
                    </div>
                </div>
                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'>
                        <div className='ProjectName'>Project Big</div>
                        <button className='TButton'>{Icon("Overview","3vmin")}</button>
                        <button className='TButton'>{Icon("MenuView","3vmin")}</button>
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressColor' style={{ width:"32%"}}/>
                    </div>
                </div>
                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'>
                        <div className='ProjectName'>Project Big</div>
                        <button className='TButton'>{Icon("Overview","3vmin")}</button>
                        <button className='TButton'>{Icon("MenuView","3vmin")}</button>
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressColor' style={{ width:"67%"}}/>
                    </div>
                </div>
                <div className='OneProjectLine'>
                    <div className='ProjectNameLine'>
                        <div className='ProjectName'>Project Big</div>
                        <button className='TButton'>{Icon("Overview","3vmin")}</button>
                        <button className='TButton'>{Icon("MenuView","3vmin")}</button>
                    </div>
                    <div className='ProgressBar'>
                        <div className='ProgressColor' style={{ width:"100%"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Projects;