import React from 'react';
import Card from './Card/Card';
import {tracks} from '../../../../../data/demo';

const BottomShowcase = () => {
    return (
        <div className="w-full grid grid-cols-5 gap-y-3">
            {
                tracks.map((track,index)=>{
                    return <Card key={index} cover={track.imgUrl.url} name={track.name} artist={track.artists.join(", ")} />
                })
            }
        </div>
    )
}

export default BottomShowcase
