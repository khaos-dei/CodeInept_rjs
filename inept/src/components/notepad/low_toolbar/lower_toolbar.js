import './lower_toolbar.css';
import React, { useState } from 'react';
import {Icon} from '../../../constants/Icons'
import NotepadPopups from './popups/popup_manager'


function NotepadToolbar(props) {
    const [showPopup, setShowPopup] = useState('none');
    return (
        <>
        <NotepadPopups editor={props.editor} font={props.font} show={[showPopup, setShowPopup]} />
        <div className='NotepadToolbar'>
            <button className='TButton' onClick={() => props.editor.chain().focus().undo().run()}>{Icon("Undo","2.5vmin")}</button>
            <button className='TButton' onClick={() => props.editor.chain().focus().redo().run()}>{Icon("Redo","2.5vmin")}</button>
            <button className='TButton' onMouseDown={() => setShowPopup("Align")}>{Icon("AlignL","2.5vmin")}</button>
            <button className='TButton' onMouseDown={() => setShowPopup("Font")}>{Icon("Font","2.5vmin")}</button>
            <button className='TButton' onMouseDown={() => setShowPopup("List")}>{Icon("AddList","2.5vmin")}</button>
            <button className='TButton' onMouseDown={() => setShowPopup("Header")}>{Icon("H0","2.5vmin")}</button>
            <button className='TButton' onMouseDown={() => setShowPopup("Color")}>{Icon("TextColor","2.5vmin")}</button> 
            <button className='TButton' onClick={() => props.editor.chain().focus().toggleCodeBlock().run()}>{Icon("Code","2.5vmin")}</button>
            <button className='TButton' onClick={() => props.editor.chain().focus().setHorizontalRule().run()}>{Icon("Line","2.5vmin")}</button>
        </div>
        </>
    );
  }
  
  export default NotepadToolbar;