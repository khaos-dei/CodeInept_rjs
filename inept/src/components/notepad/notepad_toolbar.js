import './notepad_toolbar.css';
import {Icon} from '../../constants/Icons'


function NotepadToolbar(props) {

    return (
        <>
        <div className='NotepadToolbar'>
        <button className='TButton' onClick={() => props.editor.chain().focus().undo().run()}>{Icon("Undo","2.5vmin")}</button>
        <button className='TButton' onClick={() => props.editor.chain().focus().redo().run()}>{Icon("Redo","2.5vmin")}</button>
        <button className='TButton' onMouseDown={() =>props.setShow("Align")}>{Icon("AlignL","2.5vmin")}</button>
        <button className='TButton' onMouseDown={() =>props.setShow("Font")}>{Icon("Font","2.5vmin")}</button>
        <button className='TButton' onMouseDown={() =>props.setShow("List")}>{Icon("AddList","2.5vmin")}</button>
        <button className='TButton' onMouseDown={() =>props.setShow("Header")}>{Icon("H0","2.5vmin")}</button>
        <button className='TButton' onMouseDown={() =>props.setShow("Color")}>{Icon("TextColor","2.5vmin")}</button> 
        <button className='TButton' onClick={() => props.editor.chain().focus().toggleCodeBlock().run()}>{Icon("Code","2.5vmin")}</button>
        <button className='TButton' onClick={() => props.editor.chain().focus().setHorizontalRule().run()}>{Icon("Line","2.5vmin")}</button>
        </div>
        </>
    );
  }
  
  export default NotepadToolbar;