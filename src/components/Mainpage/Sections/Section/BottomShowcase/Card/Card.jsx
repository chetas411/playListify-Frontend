import React,{useRef,useEffect} from 'react';

const Card = (props) => {
    let sound = useRef()
    let audioEl;
    //separate elements are taken to prevent re render if we were using state on isplaying
    // more clean way is need to be figured out for doing this later
    useEffect(()=>{
        sound.current.isplaying = false;
        audioEl = sound.current;

    });
    const playTrack = ()=>{
        if(!sound.current.isplaying){
            audioEl.play();
            sound.current.isplaying = true;
        }
    };
    const pauseTrack = ()=>{
        if(sound.current.isplaying){
            audioEl.pause();
            sound.current.isplaying = false;
        }
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
            <audio id={props.trackey} src={props.preview} ref={sound}>
                {/* <source src={props.preview} type="audio/mpeg" /> */}
            </audio>
        </div>
    )
}

export default Card;
