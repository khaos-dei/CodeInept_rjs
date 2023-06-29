import MiniDialog from '../mini_dialogue'
import editor from '../../utils/notepad_editor'
import {Icon} from '../../constants/Icons'

function NotepadListPopup(props) {
return(
<MiniDialog /* List Types Buttons */
                body={
                  <div className='ThreeButtonLine'>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().toggleBulletList().run()}> {Icon("Bullet","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().toggleOrderedList().run()}> {Icon("Enum","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().toggleTaskList().run()}> {Icon("Todo","3vmin",0)}</button>
                  </div>
                }
                open={props.showMiniDialogLst}
                position={["66.5%","70.5%","4.5vmin","11vmin"]}
                background_color="gray"/>
)
}

export default NotepadListPopup;