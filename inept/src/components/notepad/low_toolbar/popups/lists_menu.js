import MiniDialog from 'utils/mini_dialogue'
import IconButton from 'utils/IconButton'

function NotepadListPopup(props) {
return(
<MiniDialog /* List Types Buttons */
                body={
                  <div className='ThreeButtonLine'>
                    <IconButton is="Bullet" onClick={() => props.editor.chain().focus().toggleBulletList().run()}/>
                    <IconButton is="Enum"   onClick={() => props.editor.chain().focus().toggleOrderedList().run()}/>
                    <IconButton is="Todo"   onClick={() => props.editor.chain().focus().toggleTaskList().run()}/>
                  </div>
                }
                open={props.showMiniDialogLst}
                position={["66.5%","81%","4.5vmin","11vmin"]}
                background_color="gray"/>
)
}

export default NotepadListPopup;