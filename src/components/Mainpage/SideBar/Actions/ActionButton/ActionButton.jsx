import React from 'react';

const ActionButton = (props) => {
    return (
        <div className=" group flex flex-col justify-center items-center w-full h-20 space-y-1 cursor-pointer">
            {props.children}
            <h1 className="text-base text-gray-900 group-hover:text-green-400">{props.action}</h1>
        </div>
    )
}

export default ActionButton;
