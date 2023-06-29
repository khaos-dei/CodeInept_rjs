import './notepad.css';
import React, { useState} from 'react';

import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Document from '@tiptap/extension-document'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { EditorContent, useEditor} from '@tiptap/react'

import NotepadPopups from './notepad_popups'
import NotepadToolbar from './notepad_toolbar'
import NotepadTabs from './notepad_tabs'
import NotepadBubblePopup from './notepad_bubble_popup'




function Notepad(props) {
    const [fontSize, setfontSize] = useState(26);
    const [showPopup, setShowPopup] = useState('none');

    const editor = useEditor({
        extensions: [
          Document,Paragraph,Text,TaskList.configure({itemTypeName: 'taskItem',}),TaskItem,
          Color,TextStyle,TextAlign.configure({types: ['heading', 'paragraph'],}),StarterKit,
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <ul data-type="taskList">
            <li data-type="taskItem" data-checked="true">flour</li>
          </ul> 
        `,
    })
    return (
      <div className='Notepad'> 
        {editor&&<NotepadBubblePopup editor={editor}/>}

        <NotepadTabs />

        <NotepadPopups editor={editor} font={[fontSize, setfontSize]} show={[showPopup, setShowPopup]}/>

        <div className='Notebook_Text' style={{fontSize:fontSize+'px'}}>
          <EditorContent editor={editor}/>
        </div>

        <NotepadToolbar editor={editor} setShow={setShowPopup}/>
      </div>
    );
  }
  
  export default Notepad;