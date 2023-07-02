import {BubbleMenu} from '@tiptap/react'

function NotepadBubblePopup(props) {
return(
<BubbleMenu className="bubble-menu" tippyOptions={{ duration: 100 }} editor={props.editor}>
            <button
              onClick={() => props.editor.chain().focus().toggleBold().run()}
              className={props.editor.isActive('bold') ? 'is-active' : ''}
            >
              Bold
            </button>
            <button
              onClick={() => props.editor.chain().focus().toggleItalic().run()}
              className={props.editor.isActive('italic') ? 'is-active' : ''}
            >
              Italic
            </button>
            <button
              onClick={() => props.editor.chain().focus().toggleStrike().run()}
              className={props.editor.isActive('strike') ? 'is-active' : ''}
            >
              Strike
            </button>
          </BubbleMenu>
)
}

export default NotepadBubblePopup;