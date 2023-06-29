import React, { useState, useRef} from 'react'
import './triage_bubble.css';
import {setToLS, getFromLS} from './localstorage_component';


var repeatOff = 0;
var nL_adj = 0;

function TriageBubble(props) {
    const [triageState, setTriageState] = useState(0);
    var triageTextStateRef= [useRef(getFromLS("Priority1")), useRef(getFromLS("Priority2")), useRef(getFromLS("Priority3"))];
    const [paddState, setPaddState] = useState(10);
    const [fontState, setFontState] = useState(20);


    
    React.useEffect(() => { 
    autoResize();
    })//after each render

    React.useEffect(() => {
        function handleResize() { autoResize();}
        window.addEventListener('resize', handleResize)//for the window being resized
      })

    function textResponse(event){
        autoResize();
        setToLS('Priority'+(triageState+1),document.getElementById('parent').childNodes[0].textContent)
        console.log(triageTextStateRef[triageState].current); 
    }
    function changeTriage(event){
        if(triageState===2){setTriageState(0);}else{setTriageState(triageState+1);}
        triageTextStateRef[triageState].current = document.getElementById('parent').childNodes[0].textContent;
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
            //if((fontSZ<=0)||(fontSZ==Infinity)||(fontSZ==NaN)){setFontState(10);}
            if(repeatOff>10){nL_adj+=1; if(autoSizerDebug)console.log("{",nL_adj,"}")}
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
                <div className="Triage_Tag_Bubble" onClick={changeTriage} >
                <div className="Triage_Tag_Text" >Triage #{triageState+1}</div>
                </div> 
                <div id='parent' className="Triage_Text" onKeyUpCapture={textResponse} style={{fontSize:fontState+'px', lineHeight:fontState*1+'px', paddingTop:paddState+'px'}} >
                    <div contentEditable="true" suppressContentEditableWarning="true" className="Text_Holder" >{triageTextStateRef[triageState].current}</div>
                </div>
        </div>
        
    );
  }
  
  export default TriageBubble;


