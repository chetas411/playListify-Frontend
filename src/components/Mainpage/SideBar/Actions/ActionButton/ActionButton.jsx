import React,{useContext} from 'react';
import {DisplayDataContext} from '../../../Mainpage';

const ActionButton = (props) => {
    const displaydata = useContext(DisplayDataContext);
    const handleClick = ()=>{
        props.update(props.ckey);
        let newData = {
            imgUrl: props.bgUrl,
            text: props.action
        };
        displaydata.updateSectionData(newData);
    }
    let colorclass = props.activeclass[props.ckey];
    return (
        <div className=" group flex flex-col justify-center items-center w-full h-20 space-y-1 cursor-pointer focus:bg-red-300"
            onClick={handleClick}
        >
            {props.children}
            <h1 className={`text-base text-gray-900 group-hover:text-green-400 ${colorclass}`}>{props.action}</h1>
        </div>
    )
}

export default ActionButton;
