import {Sketch } from '@uiw/react-color';

import React, { useState } from 'react';
import MiniDialog from 'utils/mini_dialogue'

function NotepadColorPopup(props) {
  const [hex, setHex] = useState("#fff");

  return(
  <MiniDialog /* Color text even buttons are not present yet! */
                  body={
                    <Sketch
                      style={{width:"25vmin", height:"32vmin"}}
                      color={hex}
                      disableAlpha={true}
                      onChange={(color) => {
                      setHex(color.hex);
                      props.editor.chain().focus().setColor(hex).run()
                      }}
                    />
                  }
                  open={props.showMiniDialogColor}
                  position={["66.5%","75%","32.5vmin","25.5vmin"]}
                  background_color="gray"/>
  )
}

export default NotepadColorPopup;