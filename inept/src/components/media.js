import './media.css';
import React from 'react';
import YouTube from 'react-youtube';

function Media(props) {
    const opts = {
        height: '200',
        width: '200',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
    return(
        <div className='Media'>
           <YouTube videoId="2g811Eo7K8U" opts={opts} />
        </div>
    );
  }
  
  export default Media;