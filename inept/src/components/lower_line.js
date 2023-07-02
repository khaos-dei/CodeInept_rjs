import './lower_line.css';
import gif1 from '../assets/424-breathing.gif'
import gif2 from '../assets/Zen_Garden.gif'

import ZenGifs from './zen_gifs';

function LowerLine(props) {

    return(
        <div className='Lower_Line'>
            <ZenGifs />
            <p>~~~~~~~Other embeds will go here </p>
        </div>
    );
  }
  
  export default LowerLine;