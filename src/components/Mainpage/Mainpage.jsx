import React from 'react';
import SideBar from './SideBar/SideBar';
import Section from './Section/Section';

const Mainpage = () => {
    return (
        <div className="w-full h-screen grid grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
            <SideBar />
            <Section />
        </div>
    )
}

export default Mainpage;
