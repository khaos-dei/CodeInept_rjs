import "./tab_menu.css"
import React, {useState} from 'react';
import { IconO } from 'constants/Icons';
import { setToLS } from 'utils/localstorage_component';
import TabMenu_Line from './menu_line';
import { NewNoteContent } from 'constants/LocalBrowseConsts';

function NotepadTabMenu(props) {
    const [showNewName, setshowNewName] = useState(true);
    const [newName, setnewName] = useState('New Note');
    const [showMove, setMove] = useState(false);

    function saveNote(){
        setToLS("note-List", [...props.noteList[0], newName]);
        setToLS("note-Contents", [...props.noteContent[0], NewNoteContent]);
        props.noteList[1]([...props.noteList[0], newName]);
        props.noteContent[1]([...props.noteContent[0], NewNoteContent]);
        setshowNewName(!showNewName)
    }

    function MoveNoteUp(event) {
        const theId = Number(event.currentTarget.value);
        let listWithMovedNote = [...props.noteList[0]];
        let contentsWithMovedNote = [...props.noteContent[0]];
        listWithMovedNote[theId] = props.noteList[0][theId - 1];
        listWithMovedNote[theId - 1] = props.noteList[0][theId];
        contentsWithMovedNote[theId] = props.noteContent[0][theId - 1];
        contentsWithMovedNote[theId - 1] = props.noteContent[0][theId];
        props.noteList[1](listWithMovedNote);
        props.noteContent[1](contentsWithMovedNote);
        setToLS("note-List", listWithMovedNote);
        setToLS("note-Contents", contentsWithMovedNote);
    }
    function MoveNoteDown(event) {
        const theId = Number(event.currentTarget.value);
        let listWithMovedNote = [...props.noteList[0]];
        let contentsWithMovedNote = [...props.noteContent[0]];
        listWithMovedNote[theId] = props.noteList[0][theId + 1];
        listWithMovedNote[theId + 1] = props.noteList[0][theId];
        contentsWithMovedNote[theId] = props.noteContent[0][theId + 1];
        contentsWithMovedNote[theId + 1] = props.noteContent[0][theId];
        props.noteList[1](listWithMovedNote);
        props.noteContent[1](contentsWithMovedNote);
        setToLS("note-List", listWithMovedNote);
        setToLS("note-Contents", contentsWithMovedNote);
    }

    return(
    <div className='TabsGrid'>
            {props.Tabs.map((currentElement, index) => { return (<TabMenu_Line noteList={props.noteList} noteContent={props.noteContent} Name={currentElement} ind={index} up={MoveNoteUp} down={MoveNoteDown} move={[showMove, setMove]} outSideCancelDelete={props.outSideCancelDelete} />) })}
        <div className='TabGridLine'>
        <div className='NoteName'><input name="NewNameInpt" hidden={showNewName} style={{height:"100%", fontSize:"3vmin", width:"100%", margin:"0%"}} value={newName} onInput={e => setnewName(e.target.value)}></input></div>
        {!showNewName&&<button className='IcnBtn' onClick={saveNote}> {IconO("Yes","3vmin",0)}</button>}
        {!showNewName&&<button className='IcnBtn' onClick={() =>setshowNewName(!showNewName)}> {IconO("No","3vmin",0)}</button>}
        {showNewName && <button className='IcnBtn' onClick={() => { setshowNewName(!showNewName)}} > {IconO("Add","3vmin",0)}</button>}
        </div>
    </div>
    )
}

export default NotepadTabMenu;