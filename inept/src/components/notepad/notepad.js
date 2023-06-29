import './notepad.css';
import React, { useState} from 'react';
import { BubbleMenu, EditorContent} from '@tiptap/react'

import editor from '../../utils/notepad_editor'
import {Icon} from '../../constants/Icons'

import Dialog from '../dialogue'
import NotepadPopups from './notepad_popups'
import NotepadToolbar from './notepad_toolbar'

function Notepad(props) {
    const [fontSize, setfontSize] = useState(12);
    const [showDialog, setShowDialog] = useState(false);
    const [showPopup, setShowPopup] = useState('none');

    const manageDialog = () => {
        setShowDialog(!showDialog);
    }

    return (
      <div className='Notepad'>
         
          {editor &&
          <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'is-active' : ''}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
            >
              Strike
            </button>
          </BubbleMenu>}

          <Dialog 
            header="Notes List" 
            body={<div>2023</div>} 
            open={showDialog} callback={manageDialog}/>

          <NotepadPopups fontSize={fontSize} setfontSize={setfontSize}
            show={showPopup} setShow={setShowPopup}
          />

          <div className='Notebook_TopLine' />
          
          <div className='TabArr'> 
              <button className='IcnBtn'> {Icon("Arrows","4vmin",180)} </button>
              <button className='IcnBtn'> {Icon("Arrow","2vmin",180)} </button>
              <button className='IcnBtn' >{Icon("Add","2.5vmin")}</button>
              <button className='IcnBtn' onClick={manageDialog}> {Icon("List","2.5vmin")}</button>
              <button className='IcnBtn' >{Icon("Delete","2.5vmin")}</button>
              <button className='IcnBtn' >{Icon("Color", "2.5vmin")}</button>
              <button className='IcnBtn'> {Icon("Arrow","2vmin")} </button>
              <button className='IcnBtn'> {Icon("Arrows","4vmin")} </button>
          </div>

          <div className='TabLine'>
             <button className='Tab'>Day</button>
              <button className='Tab'>Week</button>
              <button className='Tab'>Month</button>
          </div>

          <div className='Notebook_Text' style={{fontSize:fontSize+'px'}}>
          <EditorContent editor={editor}/>
          </div>

          <NotepadToolbar setShow={setShowPopup}/>
      </div>
    );
  }
  
  export default Notepad;