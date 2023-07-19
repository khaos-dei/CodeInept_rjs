
import React, { useState } from 'react';
import IconButton from 'utils/IconButton';

function MoveLine({ task, depth }) {
    return (
        <div className='TaskDDL'>
            <IconButton is="Seek" size='3vmin' color='black' deg={180} visible={depth != 1} style={{ transform: " scaleX(-1)" }} />
            <IconButton is="Up" size='3vmin' color='black' />
            <IconButton is="Down" size='3vmin' color='black' />
            <IconButton is="Seek" size='3vmin' color='black' style={{ transform: " scaleX(-1)" }} visible={depth != 4} /> 
        </div>
    );
}

export default MoveLine;