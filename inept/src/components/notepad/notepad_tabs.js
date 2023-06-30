import './notepad_tabs.css';
import React, { useState} from 'react';
import Dialog from '../dialogue'
import {Icon} from '../../constants/Icons'
import {setToLS, getFromLS} from '../localstorage_component';

import NotepadTabMenu from './notepad_tab_menu'


function NotepadTabs(props) {
    const [showDialog, setShowDialog] = useState(false);
    const [activeTab, setactiveTab]= useState(getFromLS("active-Tab"));
    const [firstTab, setfirstTab]= useState(getFromLS("first-Tab"));
    const [noteList, setnoteList]= useState(getFromLS("note-List"));
    

    const manageDialog = () => {
        setShowDialog(!showDialog);
        console.log(firstTab+1);
    }

    return (
      <>
        <Dialog 
            header="Notes List" 
            body={<NotepadTabMenu Tabs={noteList}/>} 
            width={50}
            open={showDialog} callback={manageDialog}/>

        <div className='Notebook_TopLine' />
          
        <div className='TabArr'> 
            <button className='IcnBtn' onClick={()=>setfirstTab(Number(firstTab)-3)}> {Icon("Arrows","4vmin",180)} </button>
            <button className='IcnBtn' onClick={()=>setfirstTab(Number(firstTab)-1)}> {Icon("Arrow","2vmin",180)} </button>
            <button className='IcnBtn' >{Icon("Add","2.5vmin")}</button>
            <button className='IcnBtn' onClick={manageDialog}> {Icon("List","2.5vmin")}</button>
            <button className='IcnBtn' >{Icon("Delete","2.5vmin")}</button>
            <button className='IcnBtn' onClick={()=>setfirstTab(Number(activeTab)-1)} >{Icon("Seek", "2.5vmin")}</button>
            <button className='IcnBtn' onClick={()=>setfirstTab(Number(firstTab)+1)}> {Icon("Arrow","2vmin")} </button>
            <button className='IcnBtn' onClick={()=>setfirstTab(Number(firstTab)+3)}> {Icon("Arrows","4vmin")} </button>
        </div>

        <div className='TabLine'>
            <button className={Number(activeTab) === Number(firstTab) ? 'TabActive' : 'Tab'}    onClick={()=>setactiveTab(Number(firstTab))} >{noteList[Number(firstTab)]}</button>
            <button className={Number(activeTab) === Number(firstTab)+1 ? 'TabActive' : 'Tab'}  onClick={()=>setactiveTab(Number(firstTab)+1)} >{noteList[Number(firstTab)+1]}</button>
            <button className={Number(activeTab) === Number(firstTab)+2 ? 'TabActive' : 'Tab'}  onClick={()=>setactiveTab(Number(firstTab)+2)} >{noteList[Number(firstTab)+2]}</button>
        </div>
      </>
    );
  }
  
  export default NotepadTabs;