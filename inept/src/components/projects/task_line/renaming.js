
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';

function RenameLine({ task }) {

    return (
        <div className='TaskDDL'>
            <div className='VarietyButtonLine'>
                <div style={{ paddingRight: "1vmin", gridColumnEnd: 'span 2'}}>Rename?</div>
                <IconButton is="Yes" size='3vmin' color='black' />
                <IconButton is="No" size='3vmin' color='black' />
            </div> 
        </div>
    );
}

export default RenameLine;