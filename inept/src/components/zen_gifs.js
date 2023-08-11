import './zen_gifs.css';
import {gifs} from 'constants/gifs'
import Dialog from 'utils/dialogue';
import ZenMenu from './zengif_menu';
import React, { useState, useEffect} from 'react';
import YouTube from 'react-youtube';
import IconButton from 'utils/IconButton';
import {setToLS, getFromLS} from '../utils/localstorage_component';

function ZenGifs(props) {
    const [showDialogue, setDialogue] = useState(false);
    const [activeGif, setActiveGif] = useState(getFromLS("active-gif"));
    const [showYTDialog, setYTDialog] = useState(false);
    const [YTid, setYTid] = useState(getFromLS("active-vid"));
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
        
        <Dialog /* Change youtube */
            header={"Youtube Settings"}
            body={<div>
                    <div>Input Video ID</div>
                    <input id="YoutubeInput" style={{height:"3.5vmin", width:"30vmin", paddingTop:"1.5vmin", marginRight:"1vmin"}} value={props.fontSize}></input>
                    <IconButton onClick={()=>{setYTDialog(!showYTDialog); setYTid(document.getElementById("YoutubeInput").value); setToLS("active-vid",document.getElementById("YoutubeInput").value)}} is="Yes" color='black' size='3vmin' />
                    </div>}
            open={showYTDialog}
            callback={setYTDialog}
            width={90}
            background_color="gray"
            />

        <img onClick={()=>{setDialogue(!showDialogue)}} src={gifs[activeGif]} alt="It should be a gif here..." className='SquareGif'/>
        <div className='yt_container'>
        <YouTube videoId={YTid} opts={opts} />
        </div>
        <IconButton onClick={()=>{setYTDialog(!showYTDialog)}} is="Settings" size='3vmin' visible={true} style={{position:"absolute", left:"94%", bottom:"82%"}}/>
        </>
    );
  }
  
  export default ZenGifs;