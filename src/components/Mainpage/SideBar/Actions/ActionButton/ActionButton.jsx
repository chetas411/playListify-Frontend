import React from 'react';

const ActionButton = (props) => {
    return (
        <div className="flex flex-col justify-center items-center w-full h-20 space-y-1">
            {props.children}
            <h1 className="text-base" style={{color: "#454545"}}>{props.action}</h1>
        </div>
    )
}

export default ActionButton;
