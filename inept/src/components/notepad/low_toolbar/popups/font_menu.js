import MiniDialog from 'utils/mini_dialogue'
import IconButton from 'utils/IconButton';
import {fromString} from '@tiptap/react'

function NotepadFontPopup(props) {
return(
    <MiniDialog /* Font Size Buttons Working! */
    body={
      <div className='FontButtonLine'>
      <input name="FontSizeInpt" style={{height:"3vmin", width:"100%", margin:"0%"}}  value={props.fontSize} type="number" onInput={e => props.setfontSize(e.target.value)}></input>
      <div style={{padding:"0%"}}>px</div> 
      <IconButton is="FontL" onClick={()=>props.setfontSize(fromString(props.fontSize)+2)}/>
      <IconButton is="FontS" onClick={()=>props.setfontSize(fromString(props.fontSize)-2)}/>
      </div>
    }
    open={props.showMiniDialogFnt}
    position={["66.5%","77%","5vmin","18vmin"]}
    background_color="gray"/>
)
}

export default NotepadFontPopup;