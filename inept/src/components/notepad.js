import './notepad.css';
import React, { useRef, useState} from 'react';

function Notepad(props) {
    var the_text = useRef('Saving notes is not yet implemented')
    const [fontSize, setfontSize] = useState(12);
    function BiggerFont() {
        setfontSize(fontSize+2);
    }
    function SmallerFont() {
        setfontSize(fontSize-2);
    }
    return (
        <div className='Notepad'>
            <div className='Notebook_TopLine' />
            <div className='TabLine'>
                <button className='Tab'>Day</button>
                <button className='Tab'>Week</button>
                <button className='Tab'>Month</button>
                <button className='TabUP'>V</button>
                <button className='TabDOWN'>V</button>
            </div>

            <div className='Notebook_Edge' />
            <div contentEditable="true" suppressContentEditableWarning="true" className='Notebook_Text' style={{fontSize:fontSize+'px'}}>{the_text.current}</div>
            
            <button className='FontDOWN' onClick={SmallerFont}>Oo</button>
            <button className='FontUP' onClick={BiggerFont}>oO</button>
             </div>
    );
  }
  
  export default Notepad;