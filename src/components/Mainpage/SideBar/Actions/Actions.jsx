import React,{useState} from 'react';
import ActionButton from './ActionButton/ActionButton';
import {HeartIcon} from '@heroicons/react/outline';
import {StarIcon} from '@heroicons/react/outline';
import {ClockIcon} from '@heroicons/react/outline';

const Actions = () => {
    const [activeBtn,setActiveBtn] = useState({
        tracks: "text-green-400",
        artists: "",
        history: ""
    });

    const toggleActiveBtn = (key)=>{
        let updateActiveBtn = {...activeBtn};
        for(const property in updateActiveBtn){
            if(property === key){
                updateActiveBtn[key] = "text-green-400";
            }
            else{
                updateActiveBtn[property] = "";
            }
        }
        setActiveBtn(updateActiveBtn);
    }

    return (
        <div className="flex flex-col justify-center items-center w-full space-y-4">
            <ActionButton ckey="tracks" update={toggleActiveBtn} activeclass={activeBtn} action="Top Tracks">
                <HeartIcon className={`h-10 w-12 text-gray-900 group-hover:text-green-400 ${activeBtn.tracks}`} />
            </ActionButton>
            <ActionButton ckey="artists" update={toggleActiveBtn} activeclass={activeBtn} action="Top Artists">
                <StarIcon className={`h-10 w-12 text-gray-900 group-hover:text-green-400 ${activeBtn.artists}`} />
            </ActionButton>
            <ActionButton ckey="history" update={toggleActiveBtn} activeclass={activeBtn} action="History">
                <ClockIcon className={`h-10 w-12 text-gray-900 group-hover:text-green-400 ${activeBtn.history}`} />
            </ActionButton>
        </div>
    )
}

export default Actions
