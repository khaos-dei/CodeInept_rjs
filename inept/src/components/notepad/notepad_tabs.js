import './notepad_tabs.css';
import React, { useState} from 'react';
import Dialog from '../dialogue'
import {Icon} from '../../constants/Icons'


function NotepadTabs(props) {
    const [showDialog, setShowDialog] = useState(false);

    const manageDialog = () => {
        setShowDialog(!showDialog);
    }

    return (
      <>
        <Dialog 
            header="Notes List" 
            body={<div>2023</div>} 
            open={showDialog} callback={manageDialog}/>

        <div className='Notebook_TopLine' />
          
        <div className='TabArr'> 
            <button className='IcnBtn'> {Icon("Arrows","4vmin",180)} </button>
            <button className='IcnBtn'> {Icon("Arrow","2vmin",180)} </button>
            <button className='IcnBtn' >{Icon("Add","2.5vmin")}</button>
            <button className='IcnBtn' onClick={manageDialog}> {Icon("List","2.5vmin")}</button>
            <button className='IcnBtn' >{Icon("Delete","2.5vmin")}</button>
            <button className='IcnBtn' >{Icon("Color", "2.5vmin")}</button>
            <button className='IcnBtn'> {Icon("Arrow","2vmin")} </button>
            <button className='IcnBtn'> {Icon("Arrows","4vmin")} </button>
        </div>

        <div className='TabLine'>
            <button className='Tab'>Day</button>
            <button className='Tab'>Week</button>
            <button className='Tab'>Month</button>
        </div>
      </>
    );
  }
  
  export default NotepadTabs;