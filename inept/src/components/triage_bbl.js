import React, { useEffect, useState } from 'react'
import './triage_bbl.css';
import { flushSync } from 'react-dom';


function Triage_Bubble(props) {
    const [triageState, setTriageState] = useState(1);
    const [triageTextState, setTriageTextState] = useState(['Priority High', 'Priority Mid', 'Priority eh']);
    
    const [paddState, setPaddState] = useState(10);
    const [fontState, setFontState] = useState(20);
    var prevDiff=[0,0];

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
        var ChildH = calculateChHeight(event);
        var ParentH = event.currentTarget.clientHeight;
        var nLines = Math.round(ChildH/fontState);
        var diff = ParentH - ChildH;
        var preventionK=1.0;
        var repeatOff = 0;
        var delta = 0;
        console.log(event.currentTarget.style.fontSize+')'+ChildH+'|'+ParentH+'|'+diff+'|'+(fontState));
        while((diff<0.5*fontState)||(diff>1.5*fontState)){
            if(diff==prevDiff[1]){//if we stuck going back and forth
                //preventionK=preventionK-0.5;//adjust less at a time
                nLines+=2;
            }else{//otherwise
                preventionK = 1.0;
                prevDiff[1]=prevDiff[0];
                prevDiff[0]=diff;//keep track of past diff-s
            }
            if (repeatOff > 50) {
                console.log('Overflow Prevented');
                return;
            }
            if(diff<0.5*fontState){//tis too big
                delta = (preventionK)*(0.5*fontState-diff)/nLines;
                flushSync(() => { setFontState(Math.round(fontState-delta)); });
                repeatOff+=1;
                console.log('tis too big|'+diff+'?'+delta+' ; '+ChildH+':'+fontState+'  {'+Math.round(fontState-delta)+'}');
            }else{//tis too smol
                delta = (preventionK)*(diff-1.5*fontState)/nLines;
                flushSync(() => { setFontState(Math.round(fontState+delta)); });
                repeatOff += 1;
                console.log('tis too smol|'+diff+'?'+delta+' ; '+fontState+'{'+Math.round(fontState+delta)+'}');
            }
            ChildH = calculateChHeight(event);
            nLines = Math.round(ChildH/fontState);
            console.log(diff+'_'+(Math.round((ParentH - ChildH)*100)/100)+'_'+paddState);
            diff =  ParentH - ChildH;
            console.log(diff);
        }
        flushSync(() => { setPaddState(Math.round(diff*0.5)) });
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
