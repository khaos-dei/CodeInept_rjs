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
    let z =  props.z ? 1 : props.z;
    return (
        <dialog className='PopupBacking' open={show} style={{zIndex : z}}>
            <div className='PopupItself' style={{width:props.width+"%"}}>
                <div className='PopupHeader'>
                    <span className='CloseCross' onClick={closeDialog}>&times;</span>
                    {props.headerSpecial}
                    <div>{props.header} {props.headerAddition}</div>
                </div>
                <div className="PopupBody">
                    {props.body}
                </div>
            </div>
        </dialog>
    )
}

export default Dialog;