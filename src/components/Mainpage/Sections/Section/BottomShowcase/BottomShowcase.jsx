import React,{useContext} from 'react';
import {UserDataContext} from '../../../../../contexts/UserDataContextProvider';
import Card from './Card/Card';

const BottomShowcase = (props) => {
    let data = useContext(UserDataContext);
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
