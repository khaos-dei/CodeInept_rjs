import React, { useEffect, useState, useRef } from 'react'
import './triage_bbl.css';
import { flushSync } from 'react-dom';


function Triage_Bubble(props) {
    const [triageState, setTriageState] = useState(1);
    var triageTextState= ['Priority High', 'Priority Mid', 'Priority eh'];
    
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
        triageTextState[triageState] = event.currentTarget.textContent;
        console.log('filler');
        autoResize();
    }
    function changeTriage(event){
        if(triageState==3){setTriageState(1);}else{setTriageState(triageState+1);}
    }

    
    function autoResize() {
        var fontSZ = fontState;
        var ChildH = calculateChHeight();
        var ParentH = document.getElementById('parent').clientHeight;
        var nLines = Math.round(ChildH / fontState);
        var diff = ParentH - ChildH;
        var delta = 0;
        console.log('>' + fontState + ' _ '+ ParentH+' _ '  + ChildH + ' | ' + 0.5 * fontState + ' < ' + diff + ' < ' + 1.5 * fontSZ + ' | ' + paddState + '(' + (diff < 0.5 * fontSZ) + '||' + (diff > 1.5 * fontSZ)+')');

        if((diff < 0.5 * fontState)||(diff > 1.5 * fontState)){//it's too big or too small
            delta = (diff - fontState)/nLines;//direct fontsize change
            fontSZ=fontState+delta;//what new fontsize would be
            nLines = nLines * fontSZ/fontState; //guesstimate the new amount of lines
            delta = (diff - fontState)/nLines;//adjusted fontsize change
            setFontState(fontState+delta);//apply
            fontSZ=fontState+delta;//new adjusted fontsize
        }
        console.log("Padding: ",Math.round(0.5*fontSZ));
        setPaddState(0.5*fontSZ)
        console.log('<' + fontSZ + ' _ '+ ParentH+' _ ' + ChildH + ' | ' + 0.5 * fontSZ + ' < ' + diff + ' < ' + 1.5 * fontSZ + ' | ' + paddState + '(' + (diff < 0.5 * fontSZ) + '||' + (diff > 1.5 * fontSZ) + ')');
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


