import './notepad.css';
import React, { useRef, useState} from 'react';
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { BubbleMenu, EditorContent, FloatingMenu, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import FontSize_icn from '../assets/icn_FontSize.png'
import AddNote_icn from '../assets/icn_AddNote.png'
import NoteList_icn from '../assets/icn_NoteList.png'
import FlippingArrows_icn from '../assets/icn_FlippingArrows2.png'
import OnesArrow_icn from '../assets/icn_OnesArrow.png'
import Delete_icn from '../assets/icn_Delete.png'
import Colors_icn from '../assets/icn_Colors.png'
import AlgLeft_icn from '../assets/icn_AlgLeft.png'
import BiggerFont_icn from '../assets/icn_BiggerFont.png'
import SmallerFont_icn from '../assets/icn_SmallerFont.png'


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


    function Icon(img, alt, size, deg=0){
       return(<img src={img} alt={alt} style={{width:size, filter:'invert(1)', transform:'rotate('+deg+'deg)'}}/>)
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
                header="Choose a font"
                body={
                  <div className='FontButtonLine'>
                  <input name="FontSizeInpt" style={{height:"3vmin", width:"100%"}}  value={fontSize} type="number" onInput={e => setfontSize(e.target.value)}></input>
                  <p>px</p>
                  <button className='h1Butn' onClick={BiggerFont}> {Icon(BiggerFont_icn,"Up","3vmin",0)}</button>
                  <button className='h1Butn' onClick={SmallerFont}> {Icon(SmallerFont_icn,"Down","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialog}
                top={580}
                left={800}
                height={"5vmin"}
                width={"18vmin"}
                background_color="gray"
                callback={manageMiniDialog} />


            <div className='Notebook_TopLine' />
            <div className='TabArr'> 
                <button className='h1Butn'> {Icon(FlippingArrows_icn,"<<","4vmin",180)} </button>
                <button className='h1Butn'> {Icon(OnesArrow_icn,"<","2vmin",180)} </button>
                <button className='h1Butn' >{Icon(AddNote_icn,"+","2.5vmin")}</button>
                <button className='h1Butn' onClick={manageDialog}>
                                            {Icon(NoteList_icn,"=","2.5vmin")}</button>
                <button className='h1Butn' >{Icon(Delete_icn,"del","2.5vmin")}</button>
                <button className='h1Butn' >{Icon(Colors_icn,"col", "2.5vmin")}</button>
                <button className='h1Butn'> {Icon(OnesArrow_icn,">","2vmin")} </button>
                <button className='h1Butn'> {Icon(FlippingArrows_icn,">>","4vmin")} </button>
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
            <button className='SideButn' onClick={BiggerFont}><img src={AlgLeft_icn} alt=">>" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
            <button className='SideButn' onMouseEnter={manageMiniDialog}><img src={FontSize_icn} alt="Oo" style={{width:"2.5vmin", filter:'invert(1)'}}/></button>
            </div>
            
            </div>
    );
  }
  
  export default Notepad;