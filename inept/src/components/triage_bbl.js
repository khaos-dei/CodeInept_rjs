import React, { useEffect, useState } from 'react'
import './triage_bbl.css';

function Triage_Bubble(props) {
    const [triageState, setTriageState] = useState('1');
    const [triage1State, setTriage1State] = useState('1');
    const [fontState, setFontState] = useState(4);
    //
    function dfontSizing(event){
        setTriageState(event.currentTarget.textContent);
        setFontState(fontState-0.1);
    }
    return (
        <div className='Triage_Bubble'>
            <div className='wrapper-parent'>
                <div class="Triage_Tag" contentEditable="true">{triageState}</div> 
                <div class="Triage_Text" contentEditable="true" onKeyUp={dfontSizing} style={{fontSize:`${fontState}vmin`}}>{triageState}</div>
            </div>
        </div>
        
    );
  }
  
  export default Triage_Bubble;
