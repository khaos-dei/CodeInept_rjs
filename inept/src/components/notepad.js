import './notepad.css';
import React, { useRef, useState} from 'react';
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { BubbleMenu, EditorContent, FloatingMenu, fromString, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {Icons,Alts} from '../constants/Icons'

import Dialog from './dialogue'
import MiniDialog from './mini_dialogue'

function Notepad(props) {
    var the_text = useRef('Saving notes is not yet implemented')
    const [fontSize, setfontSize] = useState(12);
    const [showDialog, setShowDialog] = useState(false);
    const [showMiniDialogFnt, setShowMiniDialogFnt] = useState(false);
    const [showMiniDialogH0, setShowMiniDialogH0] = useState(false);

    
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
    
    const manageMiniDialogFnt = () => {
      setShowMiniDialogFnt(!showMiniDialogFnt);
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
            <Dialog
                header="Choose a Theme"
                body={<div>2023</div>}
                open={showDialog}
                callback={manageDialog} />
            <MiniDialog
                body={
                  <div className='FontButtonLine'>
                  <input name="FontSizeInpt" style={{height:"3vmin", width:"100%", margin:"0%"}}  value={fontSize} type="number" onInput={e => setfontSize(e.target.value)}></input>
                  <div style={{padding:"0%"}}>px</div>
                  <button className='h1Butn' onClick={BiggerFont}> {Icon("FontL","3vmin",0)}</button>
                  <button className='h1Butn' onClick={SmallerFont}> {Icon("FontS","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogFnt}
                top={580}
                left={800}
                height={"5vmin"}
                width={"18vmin"}
                background_color="gray"
                callback={manageMiniDialogFnt} />
            <MiniDialog
                body={
                  <div className='HeadingButtonLine'>
                  <button className='h1Butn'> {Icon("P","3vmin",0)}</button>
                  <button className='h1Butn'> {Icon("H1","3vmin",0)}</button>
                  <button className='h1Butn'> {Icon("H2","3vmin",0)}</button>
                  <button className='h1Butn'> {Icon("H3","3vmin",0)}</button>
                  <button className='h1Butn'> {Icon("H4","3vmin",0)}</button>
                  <button className='h1Butn'> {Icon("H5","3vmin",0)}</button>
                  <button className='h1Butn'> {Icon("H6","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogH0}
                top={580}
                left={800}
                height={"9vmin"}
                width={"14vmin"}
                background_color="gray"
                callback={manageMiniDialogH0} />

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
            <EditorContent editor={editor} />
            </div>
            
            <div className='SideButtonLine'>
            <button className='SideButn' onClick={BiggerFont}>{Icon("AlignL","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={manageMiniDialogFnt}>{Icon("Font","2.5vmin")}</button>
            <button className='SideButn'>{Icon("AddList","2.5vmin")}</button>
            <button className='SideButn' onMouseDown={manageMiniDialogH0}>{Icon("H0","2.5vmin")}</button>
            </div>
            
            </div>
    );
  }
  
  export default Notepad;