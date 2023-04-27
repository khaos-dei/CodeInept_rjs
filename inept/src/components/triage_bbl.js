import React, { useState } from 'react'
import './triage_bbl.css';

var repeatOff = 0;
var nL_adj = 0;

function TriageBubble(props) {
    const [triageState, setTriageState] = useState(0);
    var triageTextState= [localStorage.getItem('Priority1'), localStorage.getItem('Priority2'),localStorage.getItem('Priority3')];
    const [paddState, setPaddState] = useState(10);
    const [fontState, setFontState] = useState(20);

    React.useEffect(() => { autoResize();
    if(localStorage.getItem("Priority1") === null){ localStorage.setItem('Priority1','Highest Priority')}
    if(localStorage.getItem("Priority2") === null){ localStorage.setItem('Priority2','Mid Priority')}
    if(localStorage.getItem("Priority3") === null){ localStorage.setItem('Priority3','Eh Priority')}
    })//after each render

    React.useEffect(() => {
        function handleResize() { autoResize();}
        window.addEventListener('resize', handleResize)//for the window being resized
      })

    function textResponse(event){
        JSON.parse(localStorage.setItem('Priority'+(triageState+1),document.getElementById('parent').childNodes[0].textContent))
        triageTextState[triageState] = document.getElementById('parent').childNodes[0].textContent;
        console.log(triageTextState);
    }
    function changeTriage(event){
        if(triageState===2){setTriageState(0);}else{setTriageState(triageState+1);}
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
            if(repeatOff>5){nL_adj+=1; if(autoSizerDebug)console.log("{",nL_adj,"}")}
            delta = (diff - fontState)/(nLines+nL_adj);//calculate the fontSize change
            if(autoSizerDebug) console.log(fontState,'+', delta)
            setFontState(fontState+delta);//apply
            fontSZ=fontState+delta;//what new fontsize would be (cannot rely on fontState cause it's async)
            setPaddState(Math.round(0.5*fontSZ)) //set ideal padding(will get fixed otherwise)
            if(autoSizerDebug) console.log("Padding: ",Math.round(0.5*fontSZ));
            repeatOff++;// the text has been adjusted, keep track of repeat offenders
        }else{
            repeatOff = 0;
            if((paddState<0.4*diff)||(paddState>0.6*diff)) setPaddState(0.5*diff)//set actual padding
        }
        if(autoSizerDebug) console.log('<' + fontSZ + ' _ '+ ParentH+' _ ' + ChildH + ' | ' + 0.5 * fontSZ + ' < ' + diff + ' < ' + 1.5 * fontSZ + ' | ' + paddState + '(' + (diff < 0.5 * fontSZ) + '||' + (diff > 1.5 * fontSZ) + ')');
    }   

    return (
        <div className='Triage_Bubble'>
                <div class="Triage_Tag_Bubble" onClick={changeTriage} >
                <div class="Triage_Tag_Text" >Triage #{triageState+1}</div>
                </div> 
            <div id='parent' class="Triage_Text" onKeyUpCapture={textResponse} style={{fontSize:fontState+'px', lineHeight:fontState*1+'px', paddingTop:paddState+'px'}} >
                    <div class="Text_Holder" contentEditable="true">{triageTextState[triageState]}</div>
                </div>
        </div>
        
    );
  }
  
  export default TriageBubble;


