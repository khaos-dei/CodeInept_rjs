import MiniDialog from '../mini_dialogue'
import editor from '../../utils/notepad_editor'
import {Icon} from '../../constants/Icons'


function NotepadAlignPopup(props) {
return(
<MiniDialog /* Align Buttons Working! */
                body={
                  <div className='ThreeButtonLine'>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().setTextAlign('left').run()}> {Icon("AlignL","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().setTextAlign('center').run()}> {Icon("AlignC","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().setTextAlign('right').run()}> {Icon("AlignR","3vmin",0)}</button>
                  </div>
                }
                open={props.showMiniDialogAlign}
                position={["66.5%","60%","4.5vmin","11vmin"]}
                background_color="gray"/>
)
}

export default NotepadAlignPopup;