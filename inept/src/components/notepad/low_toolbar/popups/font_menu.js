import MiniDialog from '../../../../utils/mini_dialogue'
import { Icon } from '../../../../constants/Icons'
import {fromString} from '@tiptap/react'

function NotepadFontPopup(props) {
return(
    <MiniDialog /* Font Size Buttons Working! */
    body={
      <div className='FontButtonLine'>
      <input name="FontSizeInpt" style={{height:"3vmin", width:"100%", margin:"0%"}}  value={props.fontSize} type="number" onInput={e => props.setfontSize(e.target.value)}></input>
      <div style={{padding:"0%"}}>px</div>
      <button className='IcnBtn' onClick={()=>props.setfontSize(fromString(props.fontSize)+2)}> {Icon("FontL","3vmin",0)}</button>
      <button className='IcnBtn' onClick={()=>props.setfontSize(fromString(props.fontSize)-2)}> {Icon("FontS","3vmin",0)}</button>
      </div>
    }
    open={props.showMiniDialogFnt}
    position={["66.5%","65%","5vmin","18vmin"]}
    background_color="gray"/>
)
}

export default NotepadFontPopup;