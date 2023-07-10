import React, { useEffect, useState } from 'react';
import { setToLS } from 'utils/localstorage_component';
import IconButton from 'utils/IconButton';

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
        let listWithRenamedNote = [...props.noteList[0]];
        listWithRenamedNote[theId] = theNewName;
        props.noteList[1](listWithRenamedNote);
        setToLS("note-List", listWithRenamedNote);
        setRename(!showRename);
    }
    function deleteNote(event) {
        const theId = Number(event.currentTarget.value);
        let listWithDeletedNote = props.noteList[0].filter((_, index) => index != theId)
        let contentsWithDeletedNote = props.noteContent[0].filter((_, index) => index != theId)
        props.noteList[1](listWithDeletedNote);
        props.noteContent[1](contentsWithDeletedNote);
        setToLS("note-List", listWithDeletedNote);
        setToLS("note-Contents", contentsWithDeletedNote);
        setDelete(!showDelete);
    }

    return (
        <div className='TabGridLine'>
            {showRename && <input id={"Rename" + props.ind} name="NoteName" defaultValue={props.Name}></input>}
            {!showRename && <div className='NoteName'>{props.Name}</div>}
            {/* Delete specific buttons */}
            {showDelete && !props.move[0] && !showRename && <IconButton is="Yes"  color='black' value={props.ind} onClick={deleteNote}/>}
            {showDelete && !props.move[0] && !showRename && <IconButton is="No"   color='black' value={props.ind} onClick={() => setDelete(false)}/>}
            {/* Move specific buttons */}
            {!showDelete && props.move[0] && !showRename && <IconButton is="Up"   color='black' value={props.ind} onClick={props.up}   disabled={(props.ind === 0)} visible={!(props.ind === 0)} />}
            {!showDelete && props.move[0] && !showRename && <IconButton is="Down" color='black' value={props.ind} onClick={props.down} disabled={(props.ind === props.noteList[0].length - 1)} visible={!(props.ind === props.noteList[0].length - 1)} />}
            {/* Rename specific buttons */}
            {!showDelete && !props.move[0] && showRename && <IconButton is="Yes" color='black'  value={props.ind} onClick={RenameNote}/> }
            {!showDelete && !props.move[0] && showRename && <IconButton is="No"  color='black'  value={props.ind} onClick={() => { setRename(false)}}/> }
            {/* Main buttons */}
            {!showDelete && !showRename &&    <IconButton is="Rearrange" color={(props.move[0] ? 'blue' : 'black')}  value={props.ind} onClick={() => props.move[1](!props.move[0])}/>}
            {!showDelete && !props.move[0] && <IconButton is="Rename"    color={(showRename ? 'green' : 'black')}  value={props.ind} onClick={() => setRename(!showRename)}/>}
            {!props.move[0] && !showRename && <IconButton is="Delete"    color={(showDelete ? 'red' : 'black')}  value={props.ind} onClick={() => setDelete(!showDelete)}/>}

        </div>
    )
}


export default TabMenu_Line;