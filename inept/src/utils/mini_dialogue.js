import "./mini_dialogue.css"
import React, { useState, useEffect } from 'react';

const MiniDialog = props => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.open);
    }, [props.open]);


    return (
            <dialog className='MiniPopupItself' style={{top:props.position[0], left:props.position[1], width:props.position[3], height:props.position[2], backgroundColor:props.background_color}} open={show}>
                <div className="MiniPopupBody">
                    {props.body}
                </div>
            </dialog>
    )
}

export default MiniDialog;