import './notepad.css';
import React, { useRef} from 'react';

function Notepad(props) {
    var the_text = useRef('Saving notes is not yet implemented')
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
            <div contentEditable="true" suppressContentEditableWarning="true" className='Notebook_Text'>{the_text.current}</div>
            
            <button className='FontDOWN'>Oo</button>
            <button className='FontUP'>oO</button>
             </div>
    );
  }
  
  export default Notepad;