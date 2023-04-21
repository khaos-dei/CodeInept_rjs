import React, { useEffect, useState, useRef } from 'react'
import './triage_bbl.css';
import { flushSync } from 'react-dom';


function Triage_Bubble(props) {
    const [triageState, setTriageState] = useState(1);
    const [triageTextState, setTriageTextState] = useState(['Priority High', 'Priority Mid', 'Priority eh']);
    
    const [paddState, setPaddState] = useState(10);
    const [fontState, setFontState] = useState(20);

    
    React.useEffect(() => { autoResize();})//for the first load
    React.useEffect(() => {
        function handleResize() { autoResize();}
        window.addEventListener('resize', handleResize)//for the window being resized
      })
    //helper functions 
    function calculateChHeight() {
        var nLines = document.getElementById('parent').childNodes.length;
        var ChildH = 0;
        for (let i = 0; i < nLines; i++) {
            ChildH += document.getElementById('parent').childNodes[i].offsetHeight;
        }
        return ChildH;
    }

    //event.currentTarget.textContent.length
    function textResponse(event){
        console.log('filler');
    }
    function changeTriage(event){
        if(triageState==3){setTriageState(1);}else{setTriageState(triageState+1);}
    }

    
    function autoResize() {
        var fontSZ = fontState; //states are asyncronous, cannot trust the values
        var prevDiff = [NaN, NaN];
        var prevLines = [NaN, NaN ]
        var ChildH = calculateChHeight();
        var ParentH = document.getElementById('parent').clientHeight;
        var nLines = Math.round(ChildH / fontSZ);
        var diff = ParentH - ChildH;
        var repeatOff = 0;
        var lineart=false;
        var delta = 0;
        var bonusbuff=0;
        console.log('>' + fontSZ + ' _ '+ ParentH+' _ '  + ChildH + ' | ' + 0.5 * fontSZ + ' < ' + diff + ' < ' + 1.5 * fontSZ + ' | ' + paddState + '(' + (diff < 0.5 * fontSZ) + '||' + (diff > 1.5 * fontSZ)+')');
        while (diff < 0.5 * fontSZ || diff > 1.5 * fontSZ ){
            if(diff==prevDiff[1]){//if we stuck going back and forth
                if(lineart){
                    lineart=false;//apparently, it's not lines
                    bonusbuff = 0.5;//bump the difference off it's convergent problematic value so it settles somewhere else
                }else{
                    nLines = prevLines[0];//assume the lines of the forth(from the back)
                    lineart = true;//we've adjusted based on line amount
                }
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
                //console.log('tis too big')
                delta = (0.5 * fontSZ -diff)/nLines + bonusbuff;
                //console.log('(0.5 * ', fontSZ,' - ', diff,')/',nLines,' = ',delta);
                flushSync(() => { setFontState(fontSZ -delta); });
                fontSZ = fontSZ - delta;
                repeatOff+=1;
            }else{//tis too smol
                //console.log('tis too smol')
                delta = (diff - 1.5 * fontSZ)/nLines + bonusbuff;
                //console.log('(0.5 * ', fontSZ,' - ', diff,')/',nLines,' = ',delta);
                flushSync(() => { setFontState(fontSZ +delta); });
                fontSZ = fontSZ + delta;
                repeatOff += 1;
            }
            ChildH = calculateChHeight();
            nLines = Math.round(ChildH / fontSZ);
            console.log(fontSZ + ' _ '+ ParentH+' _ '  + ChildH + ' | ' + 0.5 * fontSZ + ' < ' + (ParentH - ChildH) + ' < ' + 1.5 * fontSZ + ' | ' + Math.round((ParentH - ChildH) * 0.5) + '(' + ((ParentH - ChildH) < 0.5 * fontSZ) + '||' + ((ParentH - ChildH) > 1.5 * fontSZ) + ')');
            diff =  ParentH - ChildH;
            if(bonusbuff>0){
                bonusbuff=0;//we don't want this meddling anywhere else
            }
        }
        flushSync(() => { setPaddState(Math.round(diff*0.5)) });
        setPaddState(Math.round(diff * 0.5));
        //console.log("Padding: ",Math.round(diff * 0.5));
        console.log('<' + fontSZ + ' _ '+ ParentH+' _ ' + ChildH + ' | ' + 0.5 * fontSZ + ' < ' + diff + ' < ' + 1.5 * fontSZ + ' | ' + paddState + '(' + (diff < 0.5 * fontSZ) + '||' + (diff > 1.5 * fontSZ) + ')');
    }   

    return (
        <div className='Triage_Bubble'>
                <div class="Triage_Tag_Bubble" onClick={changeTriage} >
                <div class="Triage_Tag_Text" >Triage #{triageState}</div>
                </div> 
            <div id='parent' class="Triage_Text" onKeyUpCapture={autoResize} style={{fontSize:fontState+'px', lineHeight:fontState*1+'px', paddingTop:paddState+'px'}} >
                    <div class="Text_Holder" contentEditable="true">{triageTextState[triageState-1]}</div>
                </div>
        </div>
        
    );
  }
  
  export default Triage_Bubble;


