import './popup_manager.css';
import React, { useEffect, useState} from 'react';

import NotepadAlignPopup from './align_menu'
import NotepadFontPopup from './font_menu'
import NotepadHeadingPopup from './heading_menu'
import NotepadListPopup from './lists_menu'
import NotepadColorPopup from './color_menu'

function NotepadPopups(props) {
    const [showMiniDialogAlign, setShowMiniDialogAlign] = useState(false);
    const [showMiniDialogFnt, setShowMiniDialogFnt] = useState(false);
    const [showMiniDialogLst, setShowMiniDialogLst] = useState(false);
    const [showMiniDialogH0, setShowMiniDialogH0] = useState(false);
    const [showMiniDialogColor, setShowMiniDialogColor] = useState(false);

    useEffect(() => {
        if(props.show[0]!=="none"){
        setShowMiniDialogAlign( !showMiniDialogAlign&&(props.show[0]==='Align') );
        setShowMiniDialogFnt( !showMiniDialogFnt&&(props.show[0]==='Font')  );
        setShowMiniDialogLst( !showMiniDialogLst&&(props.show[0]==='List')  );
        setShowMiniDialogH0( !showMiniDialogH0&&(props.show[0]==='Header')  );
        setShowMiniDialogColor( !showMiniDialogColor&&(props.show[0]==='Color')  );}
        props.show[1]("none");
    },[props, props.show, showMiniDialogAlign, showMiniDialogColor, showMiniDialogFnt, showMiniDialogH0, showMiniDialogLst])
    
    return (
      <>
        <NotepadAlignPopup editor={props.editor} showMiniDialogAlign={showMiniDialogAlign}/>
        <NotepadFontPopup setfontSize={props.font[1]} fontSize={props.font[0]} showMiniDialogFnt={showMiniDialogFnt} />
        <NotepadListPopup editor={props.editor} showMiniDialogLst={showMiniDialogLst}/>
        <NotepadHeadingPopup editor={props.editor} showMiniDialogH0={showMiniDialogH0}/>
        <NotepadColorPopup editor={props.editor} showMiniDialogColor={showMiniDialogColor}/>
      </>
    )
}

export default NotepadPopups;