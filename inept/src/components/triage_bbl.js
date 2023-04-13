import React, { useEffect, useState } from 'react'
import './triage_bbl.css';



//TODO: Add a warning label when user input more than 310

function Triage_Bubble(props) {
    const [singleLinePad, setsingleLinePad] = useState('5vmin');
    const [triageState, setTriageState] = useState(1);
    const [triageTextState, setTriageTextState] = useState(['Priority High ', 'Priority Mid ', 'Priority eh ']);
    const [textLengthState, settextLengthState] = useState(1);
    const [fontState, setFontState] = useState(8);
    function sizingFormula(text){
        if(text<18){
            setsingleLinePad('5vmin');
            switch(text){
                case 10:
                    return(7.6);
                case 11:
                    return(7.2);
                case 12:
                    return(6.6);
                case 13:
                    return(6);
                case 14:
                    return(5.6);
                case 15:
                    return(5.2);
                case 16:
                    return(4.9);
                case 17:
                    return(4.5);
                default:
                    return(8);
            }
        };
        setsingleLinePad('1vmin');
        if((17<text)&&(text<40)){
            return(4.6);
        };
        if((39<text)&&(text<41)){
            return(4.2);
        };
        setsingleLinePad('0vmin');
        if((40<text)&&(text<83)){
            return(3.1);
        };
        if((text>82)&&(text<111)){
           return(8/Math.sqrt(text/10) -0.05 )  
        };
        if((text>110)&&(text<185)){
            return(2);
        };
        return(1.5);//the box has a 435 character limit 
    }

    
    function dfontSizing(event){
        setFontState(sizingFormula(event.currentTarget.textContent.length));
        settextLengthState(event.currentTarget.textContent.length);
    }
    function downSizing(event){
        setFontState(fontState-0.1);
        console.log(fontState.toPrecision(2)+'_'+textLengthState);
    }
    return (
        <div className='Triage_Bubble'>
                <div class="Triage_Tag" contentEditable="true" onClick={downSizing} style={{fontSize:'2.5vmin'}}>{textLengthState}_{fontState.toPrecision(2)}</div> 
                <div id='message_container' class="Triage_Text" contentEditable="true" onKeyUp={dfontSizing} style={{'padding-top':`${singleLinePad}`, fontSize:`${fontState}vmin`}}>{triageTextState[triageState-1]}</div>
        </div>
        
    );
  }
  
  export default Triage_Bubble;
