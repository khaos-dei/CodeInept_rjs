import './notepad.css';
import React, { useRef, useState} from 'react';


import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Document from '@tiptap/extension-document'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import { BubbleMenu, EditorContent, fromString, useEditor} from '@tiptap/react'

import Dialog from './dialogue'
import MiniDialog from './mini_dialogue'

import {Icons,Alts} from '../constants/Icons'



function Notepad(props) {
    const [fontSize, setfontSize] = useState(12);
    const [showDialog, setShowDialog] = useState(false);
    const [showMiniDialogAlign, setShowMiniDialogAlign] = useState(false);
    const [showMiniDialogFnt, setShowMiniDialogFnt] = useState(false);
    const [showMiniDialogLst, setShowMiniDialogLst] = useState(false);
    const [showMiniDialogH0, setShowMiniDialogH0] = useState(false);
    
 
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


    const manageMiniDialogAlign = () => {
      setShowMiniDialogAlign(!showMiniDialogAlign);
  }
    const manageMiniDialogFnt = () => {
      setShowMiniDialogFnt(!showMiniDialogFnt);
  }
    const manageMiniDialogLst = () => {
      setShowMiniDialogLst(!showMiniDialogLst);
  }
    const manageMiniDialogH0 = () => {
      setShowMiniDialogH0(!showMiniDialogH0);
  }
    const manageDialog = () => {
        setShowDialog(!showDialog);
    }

    function BiggerFont() {
        setfontSize(fromString(fontSize)+2);
      }
    function SmallerFont() {
        setfontSize(fromString(fontSize)-2);
      }


    function Icon( key, size, deg=0){
       return(<img src={Icons[key]} alt={Alts[key]} style={{width:size, filter:'invert(1)', transform:'rotate('+deg+'deg)'}}/>)
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

            <Dialog header="Choose a Theme" body={<div>2023</div>} open={showDialog} callback={manageDialog}/>
      
            <MiniDialog /* Align Buttons Working! */
                body={
                  <div className='ThreeButtonLine'>
                  <button className='h1Butn' onClick={() => editor.chain().focus().setTextAlign('left').run()}> {Icon("AlignL","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().setTextAlign('center').run()}> {Icon("AlignC","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().setTextAlign('right').run()}> {Icon("AlignR","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogAlign} callback={manageMiniDialogAlign} 
                top={580} left={650} height={"4.5vmin"} width={"11vmin"}
                background_color="gray"/>
            <MiniDialog /* Font Size Buttons Working! */
                body={
                  <div className='FontButtonLine'>
                  <input name="FontSizeInpt" style={{height:"3vmin", width:"100%", margin:"0%"}}  value={fontSize} type="number" onInput={e => setfontSize(e.target.value)}></input>
                  <div style={{padding:"0%"}}>px</div>
                  <button className='h1Butn' onClick={BiggerFont}> {Icon("FontL","3vmin",0)}</button>
                  <button className='h1Butn' onClick={SmallerFont}> {Icon("FontS","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogFnt} callback={manageMiniDialogFnt} 
                top={580} left={800} height={"5vmin"} width={"18vmin"}
                background_color="gray"/>
            <MiniDialog /* List Types Buttons */
                body={
                  <div className='ThreeButtonLine'>
                  <button className='h1Butn' onClick={() => editor.chain().focus().toggleBulletList().run()}> {Icon("Bullet","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().toggleOrderedList().run()}> {Icon("Enum","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().toggleTaskList().run()}> {Icon("Todo","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogLst} callback={manageMiniDialogLst}
                top={580} left={800} height={"4.5vmin"} width={"11vmin"}
                background_color="gray"/>
            <MiniDialog /* Heading types Buttons Working! */
                body={
                  <div className='HeadingButtonLine'>
                  <button className='h1Butn' onClick={() => editor.chain().focus().setParagraph().run()}> {Icon("P","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}> {Icon("H1","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}> {Icon("H2","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}> {Icon("H3","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}> {Icon("H4","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}> {Icon("H5","3vmin",0)}</button>
                  <button className='h1Butn' onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}> {Icon("H6","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogH0} callback={manageMiniDialogH0} 
                top={580} left={800} height={"9vmin"} width={"14vmin"}
                background_color="gray"/>


            <div className='Notebook_TopLine' />
            <div className='TabArr'> 
                <button className='h1Butn'> {Icon("Arrows","4vmin",180)} </button>
                <button className='h1Butn'> {Icon("Arrow","2vmin",180)} </button>
                <button className='h1Butn' >{Icon("Add","2.5vmin")}</button>
                <button className='h1Butn' onClick={manageDialog}>
                                            {Icon("List","2.5vmin")}</button>
                <button className='h1Butn' >{Icon("Delete","2.5vmin")}</button>
                <button className='h1Butn' >{Icon("Color", "2.5vmin")}</button>
                <button className='h1Butn'> {Icon("Arrow","2vmin")} </button>
                <button className='h1Butn'> {Icon("Arrows","4vmin")} </button>
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
            <button className='SideButn' >{Icon("Undo","2.5vmin")}</button>
            <button className='SideButn' >{Icon("Redo","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={manageMiniDialogAlign}>{Icon("AlignL","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={manageMiniDialogFnt}>{Icon("Font","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={manageMiniDialogLst}>{Icon("AddList","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={manageMiniDialogH0}>{Icon("H0","2.5vmin")}</button>
            <button className='SideButn' >{Icon("TextColor","2.5vmin")}</button>
            <button className='SideButn' onClick={() => editor.chain().focus().toggleCodeBlock().run()}>{Icon("Code","2.5vmin")}</button>
            <button className='SideButn' onClick={() => editor.chain().focus().setHorizontalRule().run()}>{Icon("Line","2.5vmin")}</button>
            </div>
            
            </div>
    );
  }
  
  export default Notepad;