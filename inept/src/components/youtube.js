import './youtube.css';
import gif1 from '../assets/424-breathing.gif'
import gif2 from '../assets/Zen_Garden.gif'
import React from 'react';
import YouTube from 'react-youtube';

function ZeYouTube(props) {
    const opts = {
        height: '200',
        width: '200',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    return(
        <div className='Youtubes'>
           <YouTube videoId="2g811Eo7K8U" opts={opts} />
        </div>
    );
  }
  
  export default ZeYouTube;