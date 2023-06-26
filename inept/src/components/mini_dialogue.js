import "./mini_dialogue.css"
import React, { useState, useEffect } from 'react';

const MiniDialog = props => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.open);
    }, [props.open]);

    const closeDialog = () => {
        setShow(false);
        props.callback()
    }

    return (
            <dialog className='MiniPopupItself' open={show}>
                <div className='MiniPopupHeader'>
                    <span className='MiniCloseCross' onClick={closeDialog}>&times;</span>
                    {props.header}
                </div>
                <div className="MiniPopupBody">
                    {props.body}
                </div>
            </dialog>
    )
}

export default MiniDialog;