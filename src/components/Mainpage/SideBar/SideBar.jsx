import React from 'react';
import Actions from './Actions/Actions';
import Profile from './Profile/Profile'
const SideBar = () => {
    return (
        // <div className="sticky top-0 left-0 flex flex-col h-screen col-span-1 bg-gray-900 space-y-32">
        //     <Profile />
        //     <Actions />
        // </div>
        <div className="fixed sm:sticky bottom-0 sm:top-0 left-0 flex flex-row sm:flex-col h-auto sm:h-screen w-full col-span-1 bg-gray-900 sm:space-y-32 z-50">
            <Profile />
            <Actions />
        </div>
    )
}

export default SideBar;
