import React, { useEffect, useState } from 'react';
import { IconO, IconRed, IconBlue, IconGreen } from '../../../constants/Icons'
import { setToLS } from '../../../utils/localstorage_component';

function TabMenu_Line(props) {
    const [showDelete, setDelete] = useState(false);
    const [showRename, setRename] = useState(false);

    useEffect(() => {
        setDelete(false);
        setRename(false);
    }, [props.outSideCancelDelete, props.move[0]])

    function RenameNote(event) {
        const theId = Number(event.currentTarget.value);
        const theNewName = document.getElementById("Rename" + theId).value;
        let listWithRenamedNote = [...props.notes[0]];
        listWithRenamedNote[theId] = theNewName;
        props.notes[1](listWithRenamedNote);
        setToLS("note-List", listWithRenamedNote);
    }
    function deleteNote(event) {
        const theId = Number(event.currentTarget.value);
        let listWithDeletedNote = props.notes[0].filter((_, index) => index != theId)
        props.notes[1](listWithDeletedNote);
        setToLS("note-List", listWithDeletedNote);
    }

    return (
        <div className='TabGridLine'>
            {showRename && <input id={"Rename" + props.ind} name="NoteName" defaultValue={props.Name}></input>}
            {!showRename && <div className='NoteName'>{props.Name}</div>}
            {/* Delete specific buttons */}
            {showDelete && !props.move[0] && !showRename && <button className='IcnBtn' value={props.ind} onClick={deleteNote}> {IconO("Yes", "3vmin", 0)}</button>}
            {showDelete && !props.move[0] && !showRename && <button className='IcnBtn' value={props.ind} onClick={() => setDelete(false)}> {IconO("No", "3vmin", 0)}</button>}
            {/* Move specific buttons */}
            {!showDelete && props.move[0] && !showRename && <button className='IcnBtn' value={props.ind} onClick={props.up} disabled={(props.ind == 0)} > {(props.ind > 0) && IconO("Up", "3vmin", 0)} </button>}
            {!showDelete && props.move[0] && !showRename && <button className='IcnBtn' value={props.ind} onClick={props.down} disabled={(props.ind == props.notes[0].length - 1)} > {(props.ind < props.notes[0].length - 1) && IconO("Down", "3vmin", 0)} </button>}
            {/* Rename specific buttons */}
            {!showDelete && !props.move[0] && showRename && <button className='IcnBtn' value={props.ind} onClick={RenameNote}> {IconO("Yes", "3vmin", 0)}</button>}
            {!showDelete && !props.move[0] && showRename && <button className='IcnBtn' value={props.ind} onClick={() => { setRename(false)}}> {IconO("No", "3vmin", 0)}</button>}
            {/* Main buttons */}
            {!showDelete && !showRename && <button className='IcnBtn' value={props.ind} onClick={() => props.move[1](!props.move[0]) }>{(props.move[0] ? IconBlue("Rearrange", "3vmin", 0) : IconO("Rearrange", "3vmin", 0))}</button>}
            {!showDelete && !props.move[0] && <button className='IcnBtn' value={props.ind} onClick={() => setRename(!showRename)}>{(showRename ? IconGreen("Rename", "3vmin", 0) : IconO("Rename", "3vmin", 0))}</button>}
            {!props.move[0] && !showRename && <button className='IcnBtn' value={props.ind} onClick={() => setDelete(!showDelete)}>{(showDelete ? IconRed("Delete", "3vmin", 0) : IconO("Delete", "3vmin", 0))}</button>}

        </div>
    )
}


export default TabMenu_Line;