import React,{useContext} from 'react';
import Section from './Section/Section';
import {DisplaySectionContext} from '../Mainpage';
import bgforTopTracks from '../../../assets/images/bg-for-tracks.jpg';
import bgforTopArtists from '../../../assets/images/bg-for-artists.jpg';
import bgforHistory from '../../../assets/images/bg-for-history.jpg'

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
