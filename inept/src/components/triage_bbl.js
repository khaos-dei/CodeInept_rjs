import React, { useEffect, useState } from 'react'
import './triage_bbl.css';
import { flushSync } from 'react-dom';


function Triage_Bubble(props) {
    const [triageState, setTriageState] = useState(1);
    const [triageTextState, setTriageTextState] = useState(['Priority High', 'Priority Mid', 'Priority eh']);
    
    const [paddState, setPaddState] = useState(10);
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
    
    function autoResize(event) {
        var fontSZ = fontState;
        var prevDiff = [0, 0];
        var prevLines = [0, 0 ]
        var ChildH = calculateChHeight(event);
        var ParentH = event.currentTarget.clientHeight;
        var nLines = Math.round(ChildH / fontSZ);
        var diff = ParentH - ChildH;
        var repeatOff = 0;
        var delta = 0;
        console.log('>' + fontSZ + ' _ ' + ChildH + ' | ' + 0.5 * fontSZ + ' < ' + diff + ' < ' + 1.5 * fontSZ + ' | ' + paddState + '(' + (diff < 0.5 * fontSZ) + '||' + (diff > 1.5 * fontSZ)+')');
        while (diff < 0.5 * fontSZ || diff > 1.5 * fontSZ ){
            if(diff==prevDiff[1]){//if we stuck going back and forth
                nLines = prevLines[0];//assume the lines of the forth(from the back)
            }else{
                prevLines[1] = prevLines[0];
                prevLines[0] = nLines;//keep track of past lines-s
                prevDiff[1]=prevDiff[0];
                prevDiff[0]=diff;//keep track of past diff-s
            }
            if (repeatOff > 100) {
                console.log('Overflow Prevented');
                return;
            }
            if (diff < 0.5 * fontSZ){//tis too big
                delta = (0.5 * fontSZ -diff)/nLines;
                flushSync(() => { setFontState(Math.round(fontSZ -delta)); });
                fontSZ = fontSZ - delta;
                repeatOff+=1;
            }else{//tis too smol
                delta = (diff - 1.5 * fontSZ)/nLines;
                flushSync(() => { setFontState(Math.round(fontSZ +delta)); });
                fontSZ = fontSZ + delta;
                repeatOff += 1;
            }
            ChildH = calculateChHeight(event);
            nLines = Math.round(ChildH / fontSZ);
            console.log(fontSZ + ' _ ' + ChildH + ' | ' + 0.5 * fontSZ + ' < ' + (ParentH - ChildH) + ' < ' + 1.5 * fontSZ + ' | ' + Math.round((ParentH - ChildH) * 0.5) + '(' + ((ParentH - ChildH) < 0.5 * fontSZ) + '||' + ((ParentH - ChildH) > 1.5 * fontSZ) + ')');
            diff =  ParentH - ChildH;
        }
        flushSync(() => { setPaddState(Math.round(diff*0.5)) });
        setPaddState(Math.round(diff * 0.5));
        console.log('<' + fontSZ + ' _ ' + ChildH + ' | ' + 0.5 * fontSZ + ' < ' + diff + ' < ' + 1.5 * fontSZ + ' | ' + paddState + '(' + (diff < 0.5 * fontSZ) + '||' + (diff > 1.5 * fontSZ) + ')');
    }   

    return (
        <div className='Triage_Bubble'>
                <div class="Triage_Tag_Bubble" onClick={changeTriage} >
                <div class="Triage_Tag_Text" >Triage #{triageState}</div>
                </div> 
                <div class="Triage_Text"  onCompositionEndCapture={textResponse} onClick={autoResize} style={{fontSize:fontState+'px', lineHeight:fontState*1+'px', paddingTop:paddState+'px'}} >
                    <div class="Text_Holder" contentEditable="true">{triageTextState[triageState-1]}</div>
                </div>
        </div>
        
    );
  }
  
  export default Triage_Bubble;
