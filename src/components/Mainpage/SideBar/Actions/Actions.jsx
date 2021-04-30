import React,{useState,useContext} from 'react';
import ActionButton from './ActionButton/ActionButton';
import {DisplaySectionContext} from '../../../../contexts/DisplaySectionContextProvider';
import {HeartIcon} from '@heroicons/react/outline';
import {StarIcon} from '@heroicons/react/outline';
import {ClockIcon} from '@heroicons/react/outline';

const Actions = () => {
    const [activeBtn,setActiveBtn] = useState({
        tracks: true,
        artists: false,
        history: false
    });

    const {updateSectionData} = useContext(DisplaySectionContext);
    
    const toggleActiveBtn = (key)=>{
        let updateActiveBtn = {...activeBtn};
        for(const property in updateActiveBtn){
            if(property === key){
                updateActiveBtn[key] = true;
            }
            else{
                updateActiveBtn[property] = false;
            }
        }
        setActiveBtn(updateActiveBtn);
        updateSectionData(updateActiveBtn);
    }

    return (
        <div className="flex flex-row sm:flex-col justify-center items-center w-full sm:space-y-4">
            <ActionButton ckey="tracks" update={toggleActiveBtn} activeclass={activeBtn} action="Top Tracks">
                <HeartIcon className={`h-10 w-12 text-gray-900 group-hover:text-green-400 ${activeBtn.tracks ? "text-green-400" : ""}`} />
            </ActionButton>
            <ActionButton ckey="artists" update={toggleActiveBtn} activeclass={activeBtn} action="Top Artists">
                <StarIcon className={`h-10 w-12 text-gray-900 group-hover:text-green-400 ${activeBtn.artists ? "text-green-400" : ""}`} />
            </ActionButton>
            <ActionButton ckey="history" update={toggleActiveBtn} activeclass={activeBtn} action="History">
                <ClockIcon className={`h-10 w-12 text-gray-900 group-hover:text-green-400 ${activeBtn.history ? "text-green-400" : ""}`} />
            </ActionButton>
        </div>
    )
}

export default Actions
