import "./tab_menu.css"
import React, {useEffect,useRef, useState} from 'react';
import {IconO,IconRed} from '../../../constants/Icons'
import {setToLS, getFromLS} from '../../../utils/localstorage_component';

function NotepadTabMenu(props) {
    const ref = useRef(null);
    const [showNewName, setshowNewName] = useState(true);
    const [newName, setnewName] = useState('New Note');
    const [showDelete, setDelete] = useState(false);
    const [showMove, setMove] = useState(false);
    const [showRename, setRename] = useState(false);

    useEffect(() => {
        setDelete(false);
    }, [props.outSideCancelDelete])

    function saveNote(){
        setToLS("note-List",[...props.notes[0], newName]);
        props.notes[1](noteList => [...props.notes[0], newName]);
        setshowNewName(!showNewName)
    }
    function RenameNote(event) {
        const theId = Number(event.currentTarget.value);
        const theNewName = document.getElementById("Rename" + theId).value;
        let listWithRenamedNote = [...props.notes[0]];
        listWithRenamedNote[theId] = theNewName;
        props.notes[1](listWithRenamedNote);
        setToLS("note-List", listWithRenamedNote);
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

    function deleteNote(event) {
        const theId = Number(event.currentTarget.value);
        let listWithDeletedNote = props.notes[0].filter((_, index) => index != theId)
        props.notes[1](listWithDeletedNote);
        setToLS("note-List", listWithDeletedNote);
    }

    function doLine(Name, ind, indMax){
        return(
            <div className='TabGridLine'>
                {showRename && <input id={"Rename" + ind} name="NoteName" defaultValue={Name}></input>}
                {!showRename &&<div className='NoteName'>{Name}</div>}
                {/* Delete specific buttons */}
                {showDelete && !showMove && !showRename && <button className='IcnBtn' value={ind} onClick={deleteNote}> {IconO("Yes", "3vmin", 0)}</button>}
                {showDelete && !showMove && !showRename && <button className='IcnBtn' value={ind} onClick={() => setDelete(false)}> {IconO("No", "3vmin", 0)}</button>}
                {/* Move specific buttons */}
                {!showDelete && showMove && !showRename && <button className='IcnBtn' value={ind} onClick={MoveNoteUp} disabled={(ind==0)} > {(ind>0) && IconO("Up", "3vmin", 0)} </button>}
                {!showDelete && showMove && !showRename && <button className='IcnBtn' value={ind} onClick={MoveNoteDown} disabled={(ind==indMax-1)} > {(ind<indMax-1) && IconO("Down", "3vmin", 0)} </button>}
                {/* Rename specific buttons */}
                {!showDelete && !showMove && showRename && <button className='IcnBtn' value={ind} onClick={RenameNote}> {IconO("Yes", "3vmin", 0)}</button>}
                {!showDelete && !showMove && showRename && <button className='IcnBtn' value={ind}> {IconO("No", "3vmin", 0)}</button>}
                {/* Main buttons */}
                {!showDelete && !showRename && <button className='IcnBtn' value={ind} onClick={() => setMove(!showMove)}> {IconO("Rearrange", "3vmin", 0)}</button>}
                {!showDelete && !showMove && <button className='IcnBtn' value={ind} onClick={() => setRename(!showRename)}> {IconO("Rename", "3vmin", 0)}</button>}
                {!showMove && !showRename && <button className='IcnBtn' value={ind} onClick={() => setDelete(!showDelete)}>{(showDelete ? IconRed("Delete", "3vmin", 0) : IconO("Delete", "3vmin", 0))}</button>}
                
            </div>
        )
    }

    return(
    

    <div className='TabsGrid'>

        {props.Tabs.map((currentElement, index) => {return(doLine(currentElement, index, props.notes[0].length))})}
        <div className='TabGridLine'>
        <div className='NoteName'><input name="NewNameInpt" hidden={showNewName} style={{height:"100%", fontSize:"3vmin", width:"100%", margin:"0%"}} value={newName} onInput={e => setnewName(e.target.value)}></input></div>
        {!showNewName&&<button className='IcnBtn' onClick={saveNote}> {IconO("Yes","3vmin",0)}</button>}
        {!showNewName&&<button className='IcnBtn' onClick={() =>setshowNewName(!showNewName)}> {IconO("No","3vmin",0)}</button>}
        {showNewName && <button className='IcnBtn' onClick={() => { setshowNewName(!showNewName); setDelete(false);}} > {IconO("Add","3vmin",0)}</button>}
        </div>
    </div>
    )
}

export default NotepadTabMenu;