import './notepad.css';
import React, { useRef, useState} from 'react';


import FontSize_icn from '../assets/icn_FontSize.png'
import AddNote_icn from '../assets/icn_AddNote.png'
import NoteList_icn from '../assets/icn_NoteList.png'
import FlippingArrows_icn from '../assets/icn_FlippingArrows.png'


import Dialog from './dialogue'
import MiniDialog from './mini_dialogue'

function Notepad(props) {
    var the_text = useRef('Saving notes is not yet implemented')
    const [fontSize, setfontSize] = useState(12);
    const [showDialog, setShowDialog] = useState(false);
    const [showMiniDialog, setShowMiniDialog] = useState(false);
    
    
    const manageMiniDialog = () => {
        setShowMiniDialog(!showMiniDialog);
    }
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
                body={<div>2023</div>}
                open={showDialog}
                callback={manageDialog} />
            <MiniDialog
                header="Choose a font"
                body={<div>2022</div>}
                open={showMiniDialog}
                callback={manageMiniDialog} />


            <div className='Notebook_TopLine' />
            <div className='TabLine'>
                <button className='Tab'>Day</button>
                <button className='Tab'>Week</button>
                <button className='Tab'>Month</button>
            </div>

            <div className='Notebook_Edge' />
            <div contentEditable="true" suppressContentEditableWarning="true" className='Notebook_Text' style={{fontSize:fontSize+'px'}}>{the_text.current}</div>
            <div className='SideButtonLine'>
            <div className='TabArr'> 
            <button className='ArrButn'> <img src={FlippingArrows_icn} alt="Oo" style={{width:"1.5vmin", filter:'invert(1)', transform:'rotate(180deg)'}}/> </button>
            <button className='ArrButn'> <img src={FlippingArrows_icn} alt="Oo" style={{width:"1.5vmin", filter:'invert(1)'}}/> </button>
            </div>
            <button className='SideButn' ><img src={AddNote_icn} alt="Oo" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
            <button className='SideButn' onClick={manageDialog}><img src={NoteList_icn} alt="Oo" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
            <button className='SideButn' onClick={SmallerFont}>Oo</button>
            <button className='SideButn' onClick={manageMiniDialog}><img src={FontSize_icn} alt="Oo" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
            </div>
             </div>
    );
  }
  
  export default Notepad;