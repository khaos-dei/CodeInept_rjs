import React, { useEffect, useState } from 'react'
import './triage_bbl.css';

function Triage_Bubble(props) {
    //const [triageState, setTriageState] = useState(new Triage());
    return (
        <div className='Triage_Bubble'>
            <div className='Triage_Tag'>Triage</div>
            <textarea className='Triage_Text'/>
        </div>
    );
  }
  
  export default Triage_Bubble;
