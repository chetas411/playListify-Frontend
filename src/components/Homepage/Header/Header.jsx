import React from 'react';
import icon from '../../../assets/images/headphones-svgrepo-com.svg' 

const Header = () => {
    return (
        <div className="flex space-x-4 sm:space-x-8">
            <img width="100px" height="100px" className="w-14 sm:w-40" src={icon} alt="icon"/>
            <div className="py-8"> 
                <h1 className="text-4xl sm:text-8xl">PlayListify</h1>
            </div>
        </div>
    )
}

export default Header;
