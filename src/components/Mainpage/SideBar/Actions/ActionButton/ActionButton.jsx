import React from 'react';

const ActionButton = (props) => {
    let colorclass = props.activeclass[props.ckey] ? "text-green-400" : "";
    return (
        <div className=" group flex flex-col justify-center items-center w-full h-20 space-y-1 cursor-pointer focus:bg-red-300"
            onClick={()=>props.update(props.ckey)}
        >
            {props.children}
            <h1 className={`hidden sm:block text-base text-gray-900 group-hover:text-green-400 ${colorclass}`}>{props.action}</h1>
        </div>
    )
}

export default ActionButton;
