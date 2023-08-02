import React, { useState } from 'react';
import IconButton from 'utils/IconButton';

function RenameLine({renameID, feedback, cancelback}) {

    return (
        <div className='TaskDDL'>
            <div className='VarietyButtonLine'>
                <div style={{ paddingRight: "1vmin", gridColumnEnd: 'span 2'}}>Rename?</div>
                <IconButton is="Yes" size='3vmin' onClick={feedback} color='black' />
                <IconButton is="No" size='3vmin' onClick={()=>{cancelback(false)}} color='black' />
            </div> 
        </div>
    );
}

export default RenameLine;