import React,{useContext} from 'react';
import {UserDataContext} from '../../../../../contexts/UserDataContextProvider';
import Card from './Card/Card';

const BottomShowcase = (props) => {
    let data = useContext(UserDataContext);
    let info = data[props.ukey]
    return (
        <div className="w-full grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-3">
            {
                info.map((track,index)=>{
                    return <Card key={index} trackey={`${props.ukey}${index}`} cover={track?.imgUrl?.url} name={track?.name} artist={track?.information?.join(", ")} preview={track?.preview_url} />
                })
            }
        </div>
    )
}

export default BottomShowcase;
