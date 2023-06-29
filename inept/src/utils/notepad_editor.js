import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Document from '@tiptap/extension-document'
import TextStyle from '@tiptap/extension-text-style'
import TextAlign from '@tiptap/extension-text-align'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import {useEditor} from '@tiptap/react'


var TheEditor=null;

function SetEditor(){
const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      TaskList.configure({
        itemTypeName: 'taskItem',
      }),
      TaskItem,
      Color,
      TextStyle,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      StarterKit,
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul data-type="taskList">
        <li data-type="taskItem" data-checked="true">flour</li>
        <li data-type="taskItem" data-checked="true">baking powder</li>
        <li data-type="taskItem" data-checked="true">salt</li>
        <li data-type="taskItem" data-checked="false">sugar</li>
      </ul> 
    `,
})
return (editor)
}

function editor(){
    if(TheEditor===null){
        TheEditor=SetEditor();
    }
    return TheEditor;
}


export default editor();