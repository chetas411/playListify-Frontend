import React from 'react';
import Header from './Header/Header';
import Showcase from './Showcase/Showcase';

// spotify authorisation URL
const spotify_auth_url = process.env.REACT_APP_SPOTIFY_AUTH_URL;

const Homepage = () => {
    // console.log(window.location.href)
    return (
        <div className="relative w-full h-full">
            <div className="absolute box-border left-1/2 top-1/4 transform -translate-x-1/2 translate-y-1/2 w-full flex flex-col space-y-4 sm:space-y-8 justify-items-center items-center">
                <Header />
                <Showcase />
                <a href={spotify_auth_url}><button type="button" className="w-24 py-1 px-4 text-lg sm:w-48 sm:py-2 sm:px-7 sm:text-2xl rounded bg-green-400 hover:bg-green-500 focus:outline-none shadow-2xl">Log In</button></a>
            </div>
        </div>
    )
}

export default Homepage;
