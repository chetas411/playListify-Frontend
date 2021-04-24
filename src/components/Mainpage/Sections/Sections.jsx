import React,{useContext} from 'react';
import Section from './Section/Section';
import {DisplaySectionContext} from '../Mainpage';
import bgforTopTracks from '../../../assets/images/pexels-miguel-á-padriñán-3391932.jpg';
import bgforTopArtists from '../../../assets/images/pexels-sebastian-ervi-1763075.jpg';
import bgforHistory from '../../../assets/images/pexels-daniel-reche-3721941.jpg'

const Sections = () => {
    const {sectionData} = useContext(DisplaySectionContext); 
    return (
        <>
            {
                sectionData["tracks"]?
                <Section bgUrl={bgforTopTracks} text="Top Tracks"  />
                :
                null
            }
            {
                sectionData["artists"]?
                <Section bgUrl={bgforTopArtists} text="Top Artists" />
                :
                null
            }
            {
                sectionData["history"]?
                <Section bgUrl={bgforHistory} text="History" />
                :
                null
            }
        </>
    )
}

export default Sections;
