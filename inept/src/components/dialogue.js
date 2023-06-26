import "./dialogue.css"
import React, { useState, useEffect } from 'react';

const Dialog = props => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(props.open);
    }, [props.open]);

    const closeDialog = () => {
        setShow(false);
        props.callback()
    }

    return (
        <dialog className='PopupBacking' open={show}>
            <div className='PopupItself'>
                <div className='PopupHeader'>
                    <span className='CloseCross' onClick={closeDialog}>&times;</span>
                    <h2>{props.header}</h2>
                </div>
                <div className="PopupBody">
                    {props.body}
                </div>
            </div>
        </dialog>
    )
}

export default Dialog;