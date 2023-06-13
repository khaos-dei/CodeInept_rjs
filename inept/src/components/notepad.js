import './notepad.css';
import React, { useRef} from 'react';

function Notepad(props) {
    var the_text = useRef('Saving notes is not yet implemented')
    return (
        <div className='Notepad'>
            <div contentEditable="true" suppressContentEditableWarning="true" className='Notebook_Text'>{the_text.current}</div>
            <div className='TabLine'>
                <button className='Tab'>Day</button>
                <button className='Tab'>Week</button>
                <button className='Tab'>Month</button>
            </div>
            <button className='TabUP' >V</button>
            <button className='TabDOWN'>V</button>
             </div>
    );
  }
  
  export default Notepad;