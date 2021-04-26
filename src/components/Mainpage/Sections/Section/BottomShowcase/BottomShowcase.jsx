import React,{useContext} from 'react';
import {userData} from '../../Sections';
import Card from './Card/Card';
// import {tracks} from '../../../../../data/demo';

const BottomShowcase = (props) => {
    let data = useContext(userData);
    let info = data[props.ukey]
    return (
        <div className="w-full grid grid-cols-5 gap-y-3">
            {
                info.map((track,index)=>{
                    return <Card key={index} cover={track.imgUrl.url} name={track.name} artist={track.information.join(", ")} />
                })
            }
        </div>
    )
}

export default BottomShowcase;
