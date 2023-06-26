import './notepad.css';
import React, { useRef, useState} from 'react';
import Dialog from './dialogue'

function Notepad(props) {
    var the_text = useRef('Saving notes is not yet implemented')
    const [fontSize, setfontSize] = useState(12);
    const [showDialog, setShowDialog] = useState(false);
    
    
    
    const manageDialog = () => {
        setShowDialog(!showDialog);
    }

    function BiggerFont() {
        setfontSize(fontSize+2);
    }
    function SmallerFont() {
        setfontSize(fontSize-2);
    }


    return (
        <div className='Notepad'>
            <Dialog
                header="Choose a Theme"
                body={<div className='Year1'>2023</div>}
                open={showDialog}
                callback={manageDialog} />


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
            <div className='ButtonLine'>
            <button className='SideButn' >+</button>
            <button className='SideButn' onClick={manageDialog}>≣</button>
            <button className='SideButn' onClick={SmallerFont}>Oo</button>
            <button className='SideButn' onClick={BiggerFont}>oO</button>
            </div>
             </div>
    );
  }
  
  export default Notepad;