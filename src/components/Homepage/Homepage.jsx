import React from 'react';
import Header from './Header/Header';
import Showcase from './Showcase/Showcase';

// spotify authorisation URL
const spotify_auth_url = process.env.REACT_APP_SPOTIFY_AUTH_URL;

const Homepage = () => {
    return (
        <div className="w-full pt-36 h-screen flex flex-wrap flex-col space-y-8 justify-start items-center">
            <Header />
            <Showcase />
            <a href={spotify_auth_url}><button  type="button" className="w-48 py-2 px-7 text-2xl rounded bg-green-400 hover:bg-green-500 focus:outline-none shadow-2xl">Log In</button></a>
        </div>
    )
}

export default Homepage;
