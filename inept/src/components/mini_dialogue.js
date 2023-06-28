import "./mini_dialogue.css"
import React, { useState, useEffect } from 'react';

const MiniDialog = props => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.open);
    }, [props.open]);


    return (
            <dialog className='MiniPopupItself' style={{top:props.top, left:props.left, width:props.width, height:props.height, backgroundColor:props.background_color}} open={show}>
                <div className="MiniPopupBody">
                    {props.body}
                </div>
            </dialog>
    )
}

export default MiniDialog;