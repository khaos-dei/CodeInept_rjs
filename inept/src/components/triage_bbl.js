import React, { useEffect, useState } from 'react'
import './triage_bbl.css';


//TODO: Add a warning label when user input more than 310

function Triage_Bubble(props) {
    const [triageState, setTriageState] = useState(1);
    const [triageTextState, setTriageTextState] = useState(['Priority High', 'Priority Mid', 'Priority eh']);

    const [fontState, setFontState] = useState(5);
    const delta=0.1;

    function sizeUp(){
        setFontState(fontState+delta);
        return (fontState+'vmin');
    }
    function sizeDown(){
        setFontState(fontState-delta);
        return (fontState+'vmin');
    }
    //event.currentTarget.textContent.length
    function textResponse(event){
        console.log('filler');
    }
    function changeTriage(event){
        if(triageState==3){setTriageState(1);}else{setTriageState(triageState+1);}
    }
    function autoResize(event){
        console.log(event.currentTarget.style["fontSize"]+')'+event.currentTarget.firstChild .offsetHeight+'_'+event.currentTarget.firstChild.clientWidth+'|'+event.currentTarget.clientHeight+'_'+event.currentTarget.clientWidth);
        
    }   
    return (
        <div className='Triage_Bubble'>
                <div class="Triage_Tag_Bubble" onInputCapture={changeTriage}>
                <div class="Triage_Tag_Text">Triage #{triageState}</div>
                </div> 
                <div class="Triage_Text" contentEditable="true" onCompositionEndCapture={textResponse} onClick={autoResize}> 
                    <div class="Text_Holder" style={{fontSize:fontState+'vmin', lineHeight:fontState*1+'vmin'}} >{triageTextState[triageState-1]}</div>
                </div>
        </div>
        
    );
  }
  
  export default Triage_Bubble;
