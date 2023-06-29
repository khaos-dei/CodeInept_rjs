import MiniDialog from '../mini_dialogue'
import editor from '../../utils/notepad_editor'
import {Icon} from '../../constants/Icons'

function NotepadHeadingPopup(props) {
return(
<MiniDialog /* Heading types Buttons Working! */
                body={
                  <div className='HeadingButtonLine'>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().setParagraph().run()}> {Icon("P","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}> {Icon("H1","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}> {Icon("H2","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}> {Icon("H3","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}> {Icon("H4","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}> {Icon("H5","3vmin",0)}</button>
                  <button className='IcnBtn' onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}> {Icon("H6","3vmin",0)}</button>
                  </div>
                }
                open={props.showMiniDialogH0}
                position={["66.5%","75.5%","9vmin","14vmin"]}
                background_color="gray"/>
)
}

export default NotepadHeadingPopup;