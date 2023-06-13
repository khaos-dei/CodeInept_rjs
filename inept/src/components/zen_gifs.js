import './zen_gifs.css';
import gif1 from '../assets/424-breathing.gif'
import gif2 from '../assets/Zen_Garden.gif'

function ZenGifs(props) {

    return(
        <div className='ZenGifs'>
            <img src={gif1} alt="It should be a gif here..." style={{width:"50%"}}/>
            <img src={gif2} alt="It should be a gif here..." style={{width:"50%"}}/>
        </div>
    );
  }
  
  export default ZenGifs;