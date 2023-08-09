import './zen_gifs.css';
import gif1 from '../assets/424-breathing.gif'
import gif2 from '../assets/Zen_Garden.gif'
import Dialog from 'utils/dialogue';
import ZenMenu from './zengif_menu';
import React, { useState, useEffect} from 'react';

function ZenGifs(props) {
    const [showDialogue, setDialogue] = useState(false);

    return(
        <>
        <Dialog /* Delete Project? */
            header={"Choose a GIF"}
            body={<ZenMenu/>}
            open={showDialogue}
            callback={setDialogue}
            width={90}
            background_color="gray"
            />

        <img onClick={()=>{setDialogue(!showDialogue)}} src={gif1} alt="It should be a gif here..." className='SquareGif'/>
        </>
    );
  }
  
  export default ZenGifs;