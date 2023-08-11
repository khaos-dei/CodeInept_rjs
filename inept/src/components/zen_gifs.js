import './zen_gifs.css';
import {gifs} from 'constants/gifs'
import Dialog from 'utils/dialogue';
import ZenMenu from './zengif_menu';
import React, { useState, useEffect} from 'react';

function ZenGifs(props) {
    const [showDialogue, setDialogue] = useState(false);
    const [activeGif, setActiveGif] = useState(1);

    return(
        <>
        <Dialog /* Delete Project? */
            header={"Choose a GIF"}
            body={<ZenMenu id={activeGif} feedback={setActiveGif} gifs={gifs}/>}
            open={showDialogue}
            callback={setDialogue}
            width={90}
            background_color="gray"
            />

        <img onClick={()=>{setDialogue(!showDialogue)}} src={gifs[activeGif]} alt="It should be a gif here..." className='SquareGif'/>
        </>
    );
  }
  
  export default ZenGifs;