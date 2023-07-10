import './lower_toolbar.css';
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';
import NotepadPopups from './popups/popup_manager'


function NotepadToolbar(props) {
    const [showPopup, setShowPopup] = useState('none');
    return (
        <>
        <NotepadPopups editor={props.editor} font={props.font} show={[showPopup, setShowPopup]} />
        <div className='NotepadToolbar'>
            <IconButton is="Undo"       size="2.5vmin" onClick={() => props.editor.chain().focus().undo().run()}/>
            <IconButton is="Redo"       size="2.5vmin" onClick={() => props.editor.chain().focus().redo().run()}/>
            <IconButton is="AlignL"     size="2.5vmin" onClick={() => setShowPopup("Align")}/>
            <IconButton is="Font"       size="2.5vmin" onClick={() => setShowPopup("Font")}/>
            <IconButton is="AddList"    size="2.5vmin" onClick={() => setShowPopup("List")}/>
            <IconButton is="H0"         size="2.5vmin" onClick={() => setShowPopup("Header")}/>
            <IconButton is="TextColor"  size="2.5vmin" onClick={() => setShowPopup("Color")}/>
            <IconButton is="Code"       size="2.5vmin" onClick={() => props.editor.chain().focus().toggleCodeBlock().run()}/>
            <IconButton is="Line"     size="2.5vmin" onClick={() => props.editor.chain().focus().setHorizontalRule().run()}/>
        </div>
        </>
    );
  }
  
  export default NotepadToolbar;