import React from 'react';

const Card = (props) => {
    
    const playTrack = ()=>{
        let sound = document.getElementById(props.trackey)
        sound.play();
    };
    const pauseTrack = ()=>{
        let sound = document.getElementById(props.trackey)
        sound.pause();
    }

    return (
        <div 
            style={{ backgroundImage: `url(${props.cover})`}}
            className="relative w-64 h-64 bg-blend-luminosity bg-cover bg-center cursor-pointer hover:bg-green-400 transition-all transform hover:scale-105 "
            onClick = {playTrack}
            onMouseLeave = {pauseTrack}
        >
            <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
            <div className="absolute left-1 bottom-1 w-full py-1 px-1 box-border text-white">
                <h1 className="text-lg">{props.name}</h1>
                <h1 className="text-sm text-green-400">{props.artist}</h1>
            </div>
            <audio id={props.trackey}>
                <source src={props.preview} type="audio/mpeg" />
            </audio>
        </div>
    )
}

export default Card;
