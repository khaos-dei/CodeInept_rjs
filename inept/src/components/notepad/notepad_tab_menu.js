import "./notepad_tab_menu.css"
import React, { useState} from 'react';
import {IconO} from '../../constants/Icons'
import {setToLS, getFromLS} from '../localstorage_component';


function NotepadTabMenu(props) {
    const [showNewName, setshowNewName] = useState(true);
    const [newName, setnewName] = useState('New Note');

    function saveNote(){
        setToLS("note-List",[...props.notes[0], newName]);
        props.notes[1](noteList => [...props.notes[0], newName]);
        setshowNewName(!showNewName)

    }

    function doLine(Name, id){
        return(
        <div className='TabGridLine'>
        <div className='NoteName'>{Name}</div>
        <button className='IcnBtn'> {IconO("Rename","3vmin",0)}</button>
        <button className='IcnBtn'> {IconO("Delete","3vmin",0)}</button>
        <button className='IcnBtn'> {IconO("Rearrange","3vmin",0)}</button>
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
        {showNewName&&<button className='IcnBtn' onClick={() =>setshowNewName(!showNewName)} > {IconO("Add","3vmin",0)}</button>}
        </div>
    </div>
    )
}

export default NotepadTabMenu;