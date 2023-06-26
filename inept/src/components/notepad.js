import './notepad.css';
import React, { useRef, useState} from 'react';
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import FontSize_icn from '../assets/icn_FontSize.png'
import AddNote_icn from '../assets/icn_AddNote.png'
import NoteList_icn from '../assets/icn_NoteList.png'
import FlippingArrows_icn from '../assets/icn_FlippingArrows2.png'
import OnesArrow_icn from '../assets/icn_OnesArrow.png'
import Delete_icn from '../assets/icn_Delete.png'
import Colors_icn from '../assets/icn_Colors.png'
import AlgLeft_icn from '../assets/icn_AlgLeft.png'


import Dialog from './dialogue'
import MiniDialog from './mini_dialogue'

function Notepad(props) {
    var the_text = useRef('Saving notes is not yet implemented')
    const [fontSize, setfontSize] = useState(12);
    const [showDialog, setShowDialog] = useState(false);
    const [showMiniDialog, setShowMiniDialog] = useState(false);

    
    const editor = useEditor({
        extensions: [
          Color.configure({ types: [TextStyle.name, ListItem.name] }),
          TextStyle.configure({ types: [ListItem.name] }),
          StarterKit.configure({
            bulletList: {
              keepMarks: true,
              keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
            },
            orderedList: {
              keepMarks: true,
              keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
            },
          }),
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
          </p>
          <ul>
            <li>
              That’s a bullet list with one …
            </li>
            <li>
              … or two list items.
            </li>
          </ul>
        `,
      })
    
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
            <div className='TabArr'> 
                <button className='ArrButn'> <img src={FlippingArrows_icn} alt="<<" style={{width:"4vmin", filter:'invert(1)', transform:'rotate(180deg)'}}/> </button>
                <button className='ArrButn'> <img src={OnesArrow_icn} alt="<" style={{width:"2vmin", filter:'invert(1)', transform:'rotate(180deg)'}}/> </button>
                <button className='ArrButn' ><img src={AddNote_icn} alt="+" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
                <button className='ArrButn' onClick={manageDialog}><img src={NoteList_icn} alt="=" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
                <button className='ArrButn' ><img src={Delete_icn} alt="del" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
                <button className='ArrButn' ><img src={Colors_icn} alt="col" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
                <button className='ArrButn'> <img src={OnesArrow_icn} alt=">" style={{width:"2vmin", filter:'invert(1)'}}/> </button>
                <button className='ArrButn'> <img src={FlippingArrows_icn} alt=">>" style={{width:"4vmin", filter:'invert(1)'}}/> </button>
            </div>
            <div className='TabLine'>
                <button className='Tab'>Day</button>
                <button className='Tab'>Week</button>
                <button className='Tab'>Month</button>
            </div>
            {/* <div contentEditable="true" suppressContentEditableWarning="true" className='Notebook_Text' style={{fontSize:fontSize+'px'}}>
                {the_text.current}
            </div> */}
            <div className='Notebook_Text' style={{fontSize:fontSize+'px'}}>
            <EditorContent editor={editor} />
            </div>
            
            <div className='SideButtonLine'>
            <button className='SideButn' onClick={BiggerFont}><img src={AlgLeft_icn} alt=">>" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
            <button className='SideButn' onClick={manageMiniDialog}><img src={FontSize_icn} alt="Oo" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
            </div>
            
            </div>
    );
  }
  
  export default Notepad;