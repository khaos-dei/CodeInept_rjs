import "./tab_menu.css"
import React, {useState} from 'react';
import { IconO } from 'constants/Icons'
import { setToLS } from 'utils/localstorage_component';
import TabMenu_Line from './menu_line'

function NotepadTabMenu(props) {
    const [showNewName, setshowNewName] = useState(true);
    const [newName, setnewName] = useState('New Note');
    const [showMove, setMove] = useState(false);

    function saveNote(){
        setToLS("note-List",[...props.notes[0], newName]);
        props.notes[1](noteList => [...props.notes[0], newName]);
        setshowNewName(!showNewName)
    }

    function MoveNoteUp(event) {
        const theId = Number(event.currentTarget.value);
        let listWithRenamedNote = [...props.notes[0]];
        listWithRenamedNote[theId] = props.notes[0][theId - 1];
        listWithRenamedNote[theId - 1] = props.notes[0][theId];
        props.notes[1](listWithRenamedNote);
        setToLS("note-List", listWithRenamedNote);
        
    }
    function MoveNoteDown(event) {
        const theId = Number(event.currentTarget.value);
        let listWithRenamedNote = [...props.notes[0]];
        listWithRenamedNote[theId] = props.notes[0][theId + 1];
        listWithRenamedNote[theId + 1] = props.notes[0][theId];
        props.notes[1](listWithRenamedNote);
        setToLS("note-List", listWithRenamedNote);
    }

    return(
    <div className='TabsGrid'>
        {props.Tabs.map((currentElement, index) => { return (<TabMenu_Line notes={props.notes} Name={currentElement} ind={index} up={MoveNoteUp} down={MoveNoteDown} move={[showMove, setMove]} outSideCancelDelete={props.outSideCancelDelete} />) })}
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