import MiniDialog from '../../../../utils/mini_dialogue'
import IconButton from 'utils/IconButton';

function NotepadAlignPopup(props) {
return(
<MiniDialog /* Align Buttons Working! */
                body={
                  <div className='ThreeButtonLine'>
                    <IconButton is="AlignL" onClick={() => props.editor.chain().focus().setTextAlign('left').run()}/>
                    <IconButton is="AlignC" onClick={() => props.editor.chain().focus().setTextAlign('center').run()}/>
                    <IconButton is="AlignR" onClick={() => props.editor.chain().focus().setTextAlign('right').run()}/>
                  </div>
                }
                open={props.showMiniDialogAlign}
                position={["66.5%","76%","4.5vmin","11vmin"]}
                background_color="gray"/>
)
}

export default NotepadAlignPopup;