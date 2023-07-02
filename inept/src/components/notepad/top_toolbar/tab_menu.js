import "./tab_menu.css"
import React, {useEffect, useState} from 'react';
import {IconO,IconRed} from '../../../constants/Icons'
import {setToLS, getFromLS} from '../../../utils/localstorage_component';

function NotepadTabMenu(props) {
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

    function deleteNote(event) {
        const theId = Number(event.currentTarget.value);
        let listWithDeletedNote = props.notes[0].filter((_, index) => index != theId)
        props.notes[1](listWithDeletedNote);
        setToLS("note-List", listWithDeletedNote);
    }

    function doLine(Name, ind){
        return(
            <div className='TabGridLine'>
                {showRename &&<input name="NoteName" value={Name}></input>}
                {!showRename &&<div className='NoteName'>{Name}</div>}
                {/* Delete specific buttons */}
                {showDelete && !showMove && !showRename && <button className='IcnBtn' value={ind} onClick={deleteNote}> {IconO("Yes", "3vmin", 0)}</button>}
                {showDelete && !showMove && !showRename && <button className='IcnBtn' value={ind} onClick={() => setDelete(false)}> {IconO("No", "3vmin", 0)}</button>}
                {/* Move specific buttons */}
                {!showDelete && showMove && !showRename && <button className='IcnBtn' value={ind}> {IconO("Up", "3vmin", 0)}</button>}
                {!showDelete && showMove && !showRename && <button className='IcnBtn' value={ind}> {IconO("Down", "3vmin", 0)}</button>}
                {/* Rename specific buttons */}
                {!showDelete && !showMove && showRename && <button className='IcnBtn' value={ind}> {IconO("Yes", "3vmin", 0)}</button>}
                {!showDelete && !showMove && showRename && <button className='IcnBtn' value={ind}> {IconO("No", "3vmin", 0)}</button>}
                {/* Main buttons */}
                {!showDelete && !showRename && <button className='IcnBtn' value={ind}> {IconO("Rearrange", "3vmin", 0)}</button>}
                {!showDelete && !showMove && <button className='IcnBtn' value={ind}> {IconO("Rename", "3vmin", 0)}</button>}
                {!showMove && !showRename && <button className='IcnBtn' value={ind} onClick={() => setDelete(!showDelete)}>{(showDelete ? IconRed("Delete", "3vmin", 0) : IconO("Delete", "3vmin", 0))}</button>}
                
            </div>
        )
    }

    return(
    

    <div className='TabsGrid'>

        {props.Tabs.map((currentElement, index) => {return(doLine(currentElement, index))})}
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