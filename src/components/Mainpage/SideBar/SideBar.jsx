import React from 'react';
import Actions from './Actions/Actions';
import Profile from './Profile/Profile'
const SideBar = () => {
    return (
        <div className="flex flex-col h-screen col-span-1 bg-gray-900 space-y-32">
            <Profile />
            <Actions />
        </div>
    )
}
//#2b2b2b light
//#252525 dark

export default SideBar;
