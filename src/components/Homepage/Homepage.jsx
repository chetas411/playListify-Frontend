import React from 'react';
import Header from './Header/Header';
import Showcase from './Showcase/Showcase';

const Homepage = () => {
    return (
        <div className="w-full pt-36 h-screen flex flex-wrap flex-col space-y-8 justify-start items-center">
            <Header />
            <Showcase />
            <button className="w-48 py-2 px-7 text-2xl rounded bg-green-500">Log In</button>
        </div>
    )
}

export default Homepage;
