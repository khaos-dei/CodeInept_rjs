
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';

function DeleteLine({ task }) {

    return (
        <div className='TaskDDL'>
            <div className='VarietyButtonLine'>
                <div style={{ padingRight: "1vmin", gridColumnEnd: 'span 2' }}>Delete?</div>
                <IconButton is="Yes" size='3vmin' color='black' />
                <IconButton is="No" size='3vmin' color='black' />
            </div> 
        </div>
    );
}

export default DeleteLine;