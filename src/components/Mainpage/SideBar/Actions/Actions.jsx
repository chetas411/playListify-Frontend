import React,{useState} from 'react';
import ActionButton from './ActionButton/ActionButton';
import {HeartIcon} from '@heroicons/react/outline';
import {StarIcon} from '@heroicons/react/outline';
import {ClockIcon} from '@heroicons/react/outline';
import bgforTopTracks from '../../../../assets/images/pexels-miguel-á-padriñán-3391932.jpg';
import bgforTopArtists from '../../../../assets/images/pexels-sebastian-ervi-1763075.jpg';
import bgforHistory from '../../../../assets/images/pexels-daniel-reche-3721941.jpg';

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
            <ActionButton bgUrl={bgforTopTracks} ckey="tracks" update={toggleActiveBtn} activeclass={activeBtn} action="Top Tracks">
                <HeartIcon className={`h-10 w-12 text-gray-900 group-hover:text-green-400 ${activeBtn.tracks}`} />
            </ActionButton>
            <ActionButton bgUrl={bgforTopArtists} ckey="artists" update={toggleActiveBtn} activeclass={activeBtn} action="Top Artists">
                <StarIcon className={`h-10 w-12 text-gray-900 group-hover:text-green-400 ${activeBtn.artists}`} />
            </ActionButton>
            <ActionButton bgUrl={bgforHistory} ckey="history" update={toggleActiveBtn} activeclass={activeBtn} action="History">
                <ClockIcon className={`h-10 w-12 text-gray-900 group-hover:text-green-400 ${activeBtn.history}`} />
            </ActionButton>
        </div>
    )
}

export default Actions
