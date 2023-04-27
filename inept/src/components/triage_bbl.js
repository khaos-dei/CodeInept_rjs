import React, { useEffect, useState, useRef } from 'react'
import './triage_bbl.css';
import { flushSync } from 'react-dom';

var prevLines = [NaN,NaN];
var prevDiffs = [NaN,NaN];
var repeatOff = 0;
var nL_adj = 0;
var triageTextState= ['Priority High', 'Priority Mid', 'Priority eh'];

function Triage_Bubble(props) {
    const [triageState, setTriageState] = useState(1);
    
    const [paddState, setPaddState] = useState(10);
    const [fontState, setFontState] = useState(20);

    
    
    React.useEffect(() => { autoResize();})//after each render

    React.useEffect(() => {
        function handleResize() { autoResize();}
        window.addEventListener('resize', handleResize)//for the window being resized
      })

    function textResponse(event){
        triageTextState[triageState] = document.getElementById('parent').childNodes[0].textContent;
        console.log('saving');
    }
    function changeTriage(event){
        if(triageState==3){setTriageState(1);}else{setTriageState(triageState+1);}
    }

    const autoSizerDebug = false;


    function autoResize() {
        var fontSZ = fontState;
        var ChildH = document.getElementById('parent').childNodes[0].offsetHeight;
        var ParentH = document.getElementById('parent').clientHeight;
        var nLines = Math.round(ChildH / fontState);
        var diff = ParentH - ChildH;
        var delta = 0;
        if(autoSizerDebug) console.log('>' + fontState + ' _ '+ ParentH+' _ '  + ChildH + ' | ' + 0.5 * fontState + ' < ' + diff + ' < ' + 1.5 * fontSZ + ' | ' + paddState + '(' + (diff < 0.5 * fontSZ) + '||' + (diff > 1.5 * fontSZ)+')');
        if((diff < 0.5 * fontState)|| (diff > 1.5 * fontState)){
            /* if(((prevDiffs[1]<0)&&(diff-0.5*fontState<0))&&((prevDiffs[1]<0)!=(prevDiffs[0]<0))){
                nL_adj=1;
                console.log('nLines Adjusted')
            }else{
                prevDiffs[1]=prevDiffs[0];
                prevLines[1]=prevLines[0];
                prevDiffs[0]=diff - 0.5 * fontState;
                prevLines[0]=nLines;
            } */
            if(repeatOff>5){nL_adj+=1;console.log("{",nL_adj,"}")}
            delta = (diff - fontState)/(nLines+nL_adj);//calculate the fontSize change
            console.log(fontState,'+', delta)
            setFontState(fontState+delta);//apply
            fontSZ=fontState+delta;//what new fontsize would be (cannot rely on fontState cause it's async)
            setPaddState(Math.round(0.5*fontSZ)) //set ideal padding(will get fixed otherwise)
            if(autoSizerDebug) console.log("Padding: ",Math.round(0.5*fontSZ));
            repeatOff++;// the text has been adjusted, keep track of repeat offenders
        }else{
            repeatOff = 0;
            prevLines = [NaN,NaN];
            prevDiffs = [NaN,NaN];
            if((paddState<0.4*diff)||(paddState>0.6*diff)) setPaddState(0.5*diff)//set actual padding
        }
        if(autoSizerDebug) console.log('<' + fontSZ + ' _ '+ ParentH+' _ ' + ChildH + ' | ' + 0.5 * fontSZ + ' < ' + diff + ' < ' + 1.5 * fontSZ + ' | ' + paddState + '(' + (diff < 0.5 * fontSZ) + '||' + (diff > 1.5 * fontSZ) + ')');
    }   

    return (
        <div className='Triage_Bubble'>
                <div class="Triage_Tag_Bubble" onClick={changeTriage} >
                <div class="Triage_Tag_Text" >Triage #{triageState}</div>
                </div> 
            <div id='parent' class="Triage_Text" onKeyUpCapture={textResponse} style={{fontSize:fontState+'px', lineHeight:fontState*1+'px', paddingTop:paddState+'px'}} >
                    <div class="Text_Holder" contentEditable="true">{triageTextState[triageState-1]}</div>
                </div>
        </div>
        
    );
  }
  
  export default Triage_Bubble;


