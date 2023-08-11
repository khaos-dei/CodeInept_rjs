import './zen_gifs.css';
import {gifs} from 'constants/gifs'
import Dialog from 'utils/dialogue';
import ZenMenu from './zengif_menu';
import React, { useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import IconButton from 'utils/IconButton';

function ZenGifs(props) {
    const [showDialogue, setDialogue] = useState(false);
    const [activeGif, setActiveGif] = useState(1);
    const opts = {
        height: '180vmin',
        width: '304vmin',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };

    return(
        <>
        <Dialog /* Delete Project? */
            header={"Choose a GIF"}
            body={<ZenMenu id={activeGif} feedback={setActiveGif} gifs={gifs} closeback={setDialogue}/>}
            open={showDialogue}
            callback={setDialogue}
            width={90}
            background_color="gray"
            />

        <img onClick={()=>{setDialogue(!showDialogue)}} src={gifs[activeGif]} alt="It should be a gif here..." className='SquareGif'/>
        <div className='yt_container'>
        <YouTube videoId="2g811Eo7K8U" opts={opts} />
        </div>
        <IconButton is="Settings" size='3vmin' visible={true} style={{position:"absolute", left:"94%", bottom:"82%"}}/>
        </>
    );
  }
  
  export default ZenGifs;