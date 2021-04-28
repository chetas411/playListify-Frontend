import React from 'react'

const Modal = (props) => {
    return (
        <div
            onClick={props.close}
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-10">
            {props.children}
        </div>
    )
}

export default Modal;
