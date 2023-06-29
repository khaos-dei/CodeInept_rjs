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
import { BubbleMenu, EditorContent, useEditor} from '@tiptap/react'

import Dialog from './dialogue'
import NotepadPopups from './notebook_popups'

import {Icon} from '../constants/Icons'



function Notepad(props) {
    const [fontSize, setfontSize] = useState(12);
    const [showDialog, setShowDialog] = useState(false);
    const [showPopup, setShowPopup] = useState('none');

    const editor = useEditor({
        extensions: [
          Document,
          Paragraph,
          Text,
          TaskList.configure({
            itemTypeName: 'taskItem',
          }),
          TaskItem,
          Color,
          TextStyle,
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
          StarterKit,
        ],
        content: `
          <h2>
            Hi there,
          </h2>
          <p>
            this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
          </p>
          <ul data-type="taskList">
            <li data-type="taskItem" data-checked="true">flour</li>
            <li data-type="taskItem" data-checked="true">baking powder</li>
            <li data-type="taskItem" data-checked="true">salt</li>
            <li data-type="taskItem" data-checked="false">sugar</li>
          </ul> 
        `,
      })

    const manageDialog = () => {
        setShowDialog(!showDialog);
    }

    return (
        <div className='Notepad'>
         
          {editor && <BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={editor}>
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
      

          <NotepadPopups 
            editor={editor}
            fontSize={fontSize}
            setfontSize={setfontSize}
            show={showPopup}
            setShow={setShowPopup}
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
            
            <div className='SideButtonLine'>
            <button className='SideButn' onClick={() => editor.chain().focus().undo().run()}>{Icon("Undo","2.5vmin")}</button>
            <button className='SideButn' onClick={() => editor.chain().focus().redo().run()}>{Icon("Redo","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={() =>setShowPopup("Align")}>{Icon("AlignL","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={() =>setShowPopup("Font")}>{Icon("Font","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={() =>setShowPopup("List")}>{Icon("AddList","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={() =>setShowPopup("Header")}>{Icon("H0","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={() =>setShowPopup("Color")}>{Icon("TextColor","2.5vmin")}</button> 
            <button className='SideButn' onClick={() => editor.chain().focus().toggleCodeBlock().run()}>{Icon("Code","2.5vmin")}</button>
            <button className='SideButn' onClick={() => editor.chain().focus().setHorizontalRule().run()}>{Icon("Line","2.5vmin")}</button>
            </div>
            
            </div>
    );
  }
  
  export default Notepad;