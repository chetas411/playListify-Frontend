import React from 'react';

const TopShowcase = (props) => {
    return (
        <div className=" relative w-full h-3/5 bg-center bg-cover" style={{backgroundImage: `url(${props.bgImg})`}}>
            <h1 className="absolute left-4 bottom-4 text-6xl text-white">{props.heading}</h1>
            <button className="absolute right-4 top-4 py-2 px-4 text-lg bg-green-400 hover:bg-green-500 text-white rounded focus:outline-none">Create Playlist</button>
        </div>
    )
}

export default TopShowcase;
