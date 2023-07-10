import MiniDialog from 'utils/mini_dialogue'
import IconButton from 'utils/IconButton';

function NotepadHeadingPopup(props) {
return(
<MiniDialog /* Heading types Buttons Working! */
                body={
                  <div className='HeadingButtonLine'>
                    <IconButton is="P" onClick={() => props.editor.chain().focus().setParagraph().run()}/>
                    <IconButton is="H1" onClick={() => props.editor.chain().focus().toggleHeading({ level: 1 }).run()}/>
                    <IconButton is="H2" onClick={() => props.editor.chain().focus().toggleHeading({ level: 2 }).run()}/>
                    <IconButton is="H3" onClick={() => props.editor.chain().focus().toggleHeading({ level: 3 }).run()}/>
                    <IconButton is="H4" onClick={() => props.editor.chain().focus().toggleHeading({ level: 4 }).run()}/>
                    <IconButton is="H5" onClick={() => props.editor.chain().focus().toggleHeading({ level: 5 }).run()}/>
                    <IconButton is="H6" onClick={() => props.editor.chain().focus().toggleHeading({ level: 6 }).run()}/>
                  </div>
                }
                open={props.showMiniDialogH0}
                position={["66.5%","83%","9vmin","14vmin"]}
                background_color="gray"/>
)
}

export default NotepadHeadingPopup;