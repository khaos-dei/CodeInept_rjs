import './zen_gifs.css';
import React, {useState} from 'react';
import {setToLS, getFromLS} from '../utils/localstorage_component';

function ZenMenu({id, feedback, gifs, closeback}) {
    

    function gif_options(active){
        let content=[];
        for(let i=0; i<gifs.length;i++){
            content.push(<img src={gifs[i]} onClick={()=>{feedback(i); closeback(false); setToLS("active-gif", i);}} alt="It should be a gif here..." className='Gif_In_Grid' style={{backgroundColor:(i==active?'lightblue':'white')}} />)
        }
        return content;
    } 
    return(
        <>
        <div className='Gif_Grid'>
            {gif_options(id)}
        </div>
        </>
    );
  }
  
  export default ZenMenu;