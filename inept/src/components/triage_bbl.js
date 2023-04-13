import React, { useEffect, useState } from 'react'
import './triage_bbl.css';


function Triage_Bubble(props) {
    const [triageState, setTriageState] = useState(1);
    const [triageTextState, setTriageTextState] = useState(['Priority High', 'Priority Mid', 'Priority eh']);

    const [fontState, setFontState] = useState(20);

    //event.currentTarget.textContent.length
    function textResponse(event){
        console.log('filler');
    }
    function changeTriage(event){
        if(triageState==3){setTriageState(1);}else{setTriageState(triageState+1);}
    }
    function calculateChHeight(event){
        var nLines = event.currentTarget.childNodes.length;
        var ChildH = 0;
        for(let i=0; i<nLines; i++){
            ChildH +=event.currentTarget.childNodes[i].offsetHeight;
        }
        return ChildH;
    }
    function autoResize(event){
        var nLines = event.currentTarget.childNodes.length;
        var ChildH = calculateChHeight(event);
        var ParentH = event.currentTarget.clientHeight;
        var diff = ParentH-ChildH;
        var prevBig = 'false';
        var prevSmol = 'false';
        var repeatOff = 0;
        var delta = 0;
        while((diff<0.5*fontState)||(diff>1.5*fontState)){
            if (repeatOff > 20) {
                console.log('Overflow Prevented');
                return;
            }
            if(diff<0.5*fontState){//tis too big
                delta = 0.9*(0.5*fontState-diff)/nLines;
                setFontState(fontState + delta);
                event.currentTarget.style["fontSize"] = fontState + 'px';
                event.currentTarget.style["lineHeight"] = fontState * 1 + 'px';
                repeatOff+=1;
            }else{//tis too smol
                delta = 0.9*(1.5*fontState-diff)/nLines;
                setFontState(fontState+delta);
                event.currentTarget.style["fontSize"] = fontState + 'px';
                event.currentTarget.style["lineHeight"] = fontState*1 + 'px';
                repeatOff += 1;
            }
            nLines = event.currentTarget.childNodes.length;
            ChildH = calculateChHeight(event);
            diff = ParentH - ChildH;
        }
        console.log(event.currentTarget.style["fontSize"]+')'+ChildH+'|'+ParentH);
    }   
    return (
        <div className='Triage_Bubble'>
                <div class="Triage_Tag_Bubble" onInputCapture={changeTriage}>
                <div class="Triage_Tag_Text">Triage #{triageState}</div>
                </div> 
                <div class="Triage_Text" contentEditable="true" onCompositionEndCapture={textResponse} onClick={autoResize} style={{fontSize:fontState+'px', lineHeight:fontState*1+'px'}} >
                    <div class="Text_Holder" >{triageTextState[triageState-1]}</div>
                </div>
        </div>
        
    );
  }
  
  export default Triage_Bubble;
