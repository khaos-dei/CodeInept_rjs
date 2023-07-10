import './tabs.css';
import React, { useState} from 'react';
import IconButton from 'utils/IconButton';
import { setToLS, getFromLS } from 'utils/localstorage_component';
import { NewNoteContent } from 'constants/LocalBrowseConsts';
import MiniDialog from 'utils/mini_dialogue'
import Dialog from 'utils/dialogue'
import NotepadTabMenu from './tab_menu'


function NotepadTabs(props) {
    const [showDialog, setShowDialog] = useState(false);
    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [cancelDeleteInMenu, setcancelDeleteInMenu] = useState(false);
  
    const [newName, setnewName] = useState('New Note');

    function deleteNote() {
      const theId = props.activeTab[0];
      let listWithDeletedNote = props.noteList[0].filter((_, index) => index != theId)
      let contentsWithDeletedNote = props.noteContent[0].filter((_, index) => index != theId)
      props.noteList[1](listWithDeletedNote);
      props.noteContent[1](contentsWithDeletedNote);
      setToLS("note-List", listWithDeletedNote);
      setToLS("note-Contents", contentsWithDeletedNote);
      setShowDeleteDialog(!showDeleteDialog);
    }

    function SaveNewNote(){
      setToLS("note-List", [...props.noteList[0], newName]);
      setToLS("note-Contents", [...props.noteContent[0], NewNoteContent]);
      props.noteList[1]([...props.noteList[0], newName]);
      props.noteContent[1]([...props.noteContent[0], NewNoteContent]);
      setShowAddDialog(!showAddDialog)
    } 

    const manageDialog = () => {
        setcancelDeleteInMenu(!cancelDeleteInMenu);
        setShowDialog(!showDialog);
    }

    return (
      <>
        <Dialog /* Note Menu */
            header="Notes List" 
          body={<NotepadTabMenu Tabs={props.noteList[0]} outSideCancelDelete={cancelDeleteInMenu} noteList={props.noteList} noteContent={props.noteContent} />} 
            width={50}
            open={showDialog} 
            callback={manageDialog}
            />

        <MiniDialog /* New Note */
          body={
            <div className='Popup_Dialog_Add' style={{width:"25vmin", height:"5vmin"}}>
              <input name="NewNameInpt" style={{ height: "3vmin", width: "100%", margin:"auto"}} value={newName} onInput={e => setnewName(e.target.value)}></input>
              <IconButton is="Yes"  size='4vmin' onClick={SaveNewNote}/>
              <IconButton is="No"  size='4vmin' onClick={() => setShowAddDialog(!showAddDialog)}/>
            </div>
          }
          open={showAddDialog}
          position={["3%","70%","5.5vmin","25vmin"]}
          background_color="gray"/>

        <MiniDialog /* Delete Note */
          body={
            <div className='Popup_Dialog_Delete'>
              <p style={{margin:"auto"}}>Delete?</p>
              <IconButton is="Yes"  size='4vmin' onClick={deleteNote}/>
              <IconButton is="No"   size='4vmin' onClick={() => setShowDeleteDialog(!showDeleteDialog)}/>
            </div>
          }
          open={showDeleteDialog}
          position={["3%", "70%", "5.5vmin", "17vmin"]}
          background_color="gray" />

        <div className='Notebook_TopLine' />
          
        <div className='TabArr'> 
          <IconButton is="Arrows" size='4vmin' deg={180} onClick={() => props.firstTab[1](Number(props.firstTab[0])-3)}/>
          <IconButton is="Arrow"  size='2vmin' deg={180} onClick={() => props.firstTab[1](Number(props.firstTab[0])-1)}/>
          <IconButton is="Add"    size='2.5vmin' onClick={()=>setShowAddDialog(!showAddDialog)}/>
          <IconButton is="List"   size='2.5vmin' onClick={manageDialog}/>
          <IconButton is="Delete" size='2.5vmin' onClick={()=>setShowDeleteDialog(!showDeleteDialog)}/>
          <IconButton is="Seek"   size='2.5vmin' onClick={() => props.firstTab[1](Number(props.activeTab[0])-1)}/>
          <IconButton is="Arrow"  size='2vmin' onClick={() => props.firstTab[1](Number(props.firstTab[0])+1)}/>
          <IconButton is="Arrows" size='4vmin' onClick={() => props.firstTab[1](Number(props.firstTab[0])+3)}/>
        </div>

        <div className='TabLine'>
          <button className={Number(props.activeTab[0]) === Number(props.firstTab[0]) ? 'TabActive' : 'Tab'} onClick={() => props.activeTab[1](Number(props.firstTab[0]))} >{props.noteList[0][Number(props.firstTab[0])]}</button>
          <button className={Number(props.activeTab[0]) === Number(props.firstTab[0]) + 1 ? 'TabActive' : 'Tab'} onClick={() => props.activeTab[1](Number(props.firstTab[0]) + 1)} >{props.noteList[0][Number(props.firstTab[0])+1]}</button>
          <button className={Number(props.activeTab[0]) === Number(props.firstTab[0]) + 2 ? 'TabActive' : 'Tab'} onClick={() => props.activeTab[1](Number(props.firstTab[0]) + 2)} >{props.noteList[0][Number(props.firstTab[0])+2]}</button>
        </div>
      </>
    );
  }
  
  export default NotepadTabs;