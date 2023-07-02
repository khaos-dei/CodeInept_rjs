import './notepad.css';
import React, { useState, useEffect} from 'react';

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


import { getFromLS,setToLS } from 'utils/localstorage_component';

import NotepadToolbar from './low_toolbar/lower_toolbar'
import NotepadTabs from './top_toolbar/tabs'
import NotepadBubblePopup from './editor_bubble'

function Notepad(props) {
  const [fontSize, setfontSize] = useState(26);

  const [activeTab, setactiveTab] = useState(getFromLS("active-Tab"));
  const [firstTab, setfirstTab] = useState(getFromLS("first-Tab"));
  const [noteList, setnoteList] = useState(getFromLS("note-List"));
  const [noteContent, setnoteContent] = useState(getFromLS("note-Contents"));

    const editor = useEditor({
        extensions: [
          Document,Paragraph,Text,TaskList.configure({itemTypeName: 'taskItem',}),TaskItem,
          Color,TextStyle,TextAlign.configure({types: ['heading', 'paragraph'],}),StarterKit,
        ],
      content: noteContent[activeTab],
      onUpdate: ({ editor }) => {
        const theId = activeTab;
        const theNewContent = editor.getHTML();
        let newContentList = [...noteContent];
        newContentList[theId] = theNewContent;
        setnoteContent(newContentList);
        setToLS('note-Contents', newContentList);
      },
    })

    useEffect(() => {
      {editor && editor.commands.setContent(noteContent[activeTab])};
    }, [noteList, activeTab])


    return (
      <div className='Notepad'> 
        {editor&&<NotepadBubblePopup editor={editor}/>}

        <NotepadTabs activeTab={[activeTab, setactiveTab]} firstTab={[firstTab, setfirstTab]} noteList={[noteList, setnoteList]} noteContent={[noteContent, setnoteContent]}/>

        <div className='Notebook_Text' style={{fontSize:fontSize+'px'}}>
          <EditorContent editor={editor}/>
        </div>

        <NotepadToolbar editor={editor} font={[fontSize, setfontSize]}/>
      </div>
    );
  }
  
  export default Notepad;