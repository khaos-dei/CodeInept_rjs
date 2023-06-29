import './notepad_popups.css';
import React, { useEffect, useState} from 'react';

import NotepadAlignPopup from './notepad_align_popup'
import NotepadFontPopup from './notepad_font_popup'
import NotepadHeadingPopup from './notepad_heading_popup'
import NotepadListPopup from './notepad_list_popup'
import NotepadColorPopup from './notepad_color_popup'

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
    
    return (
      <>
        <NotepadAlignPopup editor={props.editor} showMiniDialogAlign={showMiniDialogAlign}/>
        <NotepadFontPopup setfontSize={props.setfontSize} fontSize={props.fontSize} showMiniDialogFnt={showMiniDialogFnt} />
        <NotepadListPopup editor={props.editor} showMiniDialogLst={showMiniDialogLst}/>
        <NotepadHeadingPopup editor={props.editor} showMiniDialogH0={showMiniDialogH0}/>
        <NotepadColorPopup editor={props.editor} showMiniDialogColor={showMiniDialogColor}/>
      </>
    )
}

export default NotepadPopups;