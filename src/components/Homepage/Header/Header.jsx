import React from 'react';
import icon from '../../../assets/images/Headphone_icon.svg.png' 

const Header = () => {
    return (
        <div className="flex space-x-8">
            <img className="w-40" src={icon} alt="icon"/>
            <div className="py-4"> 
                <h1 className="text-8xl">PlayListify</h1>
            </div>
        </div>
    )
}

export default Header;
