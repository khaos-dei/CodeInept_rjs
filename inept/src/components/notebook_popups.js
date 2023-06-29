import './notebook_popups.css';
import React, { useEffect, useState} from 'react';

import {fromString} from '@tiptap/react'

import MiniDialog from './mini_dialogue'
import {Icon} from '../constants/Icons'

function NotepadPopups(props) {
    const [showMiniDialogAlign, setShowMiniDialogAlign] = useState(false);
    const [showMiniDialogFnt, setShowMiniDialogFnt] = useState(false);
    const [showMiniDialogLst, setShowMiniDialogLst] = useState(false);
    const [showMiniDialogH0, setShowMiniDialogH0] = useState(false);
    const [showMiniDialogColor, setShowMiniDialogColor] = useState(false);

    useEffect(() => {
        if(props.show!=="none"){
        setShowMiniDialogAlign( !showMiniDialogAlign&&(props.show==='Align') );
        setShowMiniDialogFnt( !showMiniDialogFnt&&(props.show==='Font')  );
        setShowMiniDialogLst( !showMiniDialogLst&&(props.show==='List')  );
        setShowMiniDialogH0( !showMiniDialogH0&&(props.show==='Header')  );
        setShowMiniDialogColor( !showMiniDialogColor&&(props.show==='Color')  );}
        props.setShow("none");
    },[props, props.show, showMiniDialogAlign, showMiniDialogColor, showMiniDialogFnt, showMiniDialogH0, showMiniDialogLst])
    

    function BiggerFont() {
        props.setfontSize(fromString(props.fontSize)+2);
    }
    function SmallerFont() {
        props.setfontSize(fromString(props.fontSize)-2);
    }

    return (
      <>
            <MiniDialog /* Align Buttons Working! */
                body={
                  <div className='ThreeButtonLine'>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().setTextAlign('left').run()}> {Icon("AlignL","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().setTextAlign('center').run()}> {Icon("AlignC","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().setTextAlign('right').run()}> {Icon("AlignR","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogAlign}
                position={["66.5%","60%","4.5vmin","11vmin"]}
                background_color="gray"/>
            <MiniDialog /* Font Size Buttons Working! */
                body={
                  <div className='FontButtonLine'>
                  <input name="FontSizeInpt" style={{height:"3vmin", width:"100%", margin:"0%"}}  value={props.fontSize} type="number" onInput={e => props.setfontSize(e.target.value)}></input>
                  <div style={{padding:"0%"}}>px</div>
                  <button className='IcnBtn' onClick={BiggerFont}> {Icon("FontL","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={SmallerFont}> {Icon("FontS","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogFnt}
                position={["66.5%","65%","5vmin","18vmin"]}
                background_color="gray"/>
            <MiniDialog /* List Types Buttons */
                body={
                  <div className='ThreeButtonLine'>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().toggleBulletList().run()}> {Icon("Bullet","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().toggleOrderedList().run()}> {Icon("Enum","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().toggleTaskList().run()}> {Icon("Todo","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogLst}
                position={["66.5%","70.5%","4.5vmin","11vmin"]}
                background_color="gray"/>
            <MiniDialog /* Heading types Buttons Working! */
                body={
                  <div className='HeadingButtonLine'>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().setParagraph().run()}> {Icon("P","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().toggleHeading({ level: 1 }).run()}> {Icon("H1","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().toggleHeading({ level: 2 }).run()}> {Icon("H2","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().toggleHeading({ level: 3 }).run()}> {Icon("H3","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().toggleHeading({ level: 4 }).run()}> {Icon("H4","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().toggleHeading({ level: 5 }).run()}> {Icon("H5","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => props.editor.chain().focus().toggleHeading({ level: 6 }).run()}> {Icon("H6","3vmin",0)}</button>
                  </div>
                }
                open={showMiniDialogH0}
                position={["66.5%","75.5%","9vmin","14vmin"]}
                background_color="gray"/>
            <MiniDialog /* Color text even buttons are not present yet! */
                body={
                  <div className='HeadingButtonLine'>
                  color_options  (will_be) here
                  </div>
                }
                open={showMiniDialogColor}
                position={["66.5%","80%","9vmin","14vmin"]}
                background_color="gray"/>

      </>
    )
}

export default NotepadPopups;