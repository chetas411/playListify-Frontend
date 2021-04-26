import React,{useContext,useState,useEffect,createContext} from 'react';
import axios from 'axios';
import Section from './Section/Section';
import {DisplaySectionContext} from '../Mainpage';
import bgforTopTracks from '../../../assets/images/bg-for-tracks.jpg';
import bgforTopArtists from '../../../assets/images/bg-for-artists.jpg';
import bgforHistory from '../../../assets/images/bg-for-history.jpg'

const userData = createContext();
const ENDPOINT = "http://localhost:5000";
const Sections = () => {
    const [apidata,setApiData] = useState({
        tracks: [],
        artists: [],
        history: []
    });
    useEffect(()=>{
        const fetchData = async ()=>{

         await axios.get(`${ENDPOINT}/tracks`)
            .then((response)=>{
                setApiData((prevState)=>{
                    return {
                        ...prevState,
                        tracks: response.data
                    }
                })
            })
            .catch((err)=>console.log(err));
            
            
        await axios.get(`${ENDPOINT}/artists`)
            .then((response)=>{
                setApiData((prevState) => {
                    return {
                        ...prevState,
                        artists: response.data
                    }
                })
            })
            .catch((err)=>console.log(err));
            
            
        await axios.get(`${ENDPOINT}/history`)
            .then((response)=>{
                setApiData((prevState) => {
                    return {
                        ...prevState,
                        history: response.data
                    }
                })
            })
            .catch((err)=>console.log(err));
        }
        fetchData();
    },[]);
    const {sectionData} = useContext(DisplaySectionContext); 
    return (
        <>
            <userData.Provider value={apidata}>        
            {
                sectionData["tracks"]?
                <Section bgUrl={bgforTopTracks} text="Top Tracks" dkey="tracks"  />
                :
                null
            }
            {
                sectionData["artists"]?
                <Section bgUrl={bgforTopArtists} text="Top Artists" dkey="artists" />
                :
                null
            }
            {
                sectionData["history"]?
                <Section bgUrl={bgforHistory} text="History" dkey="history" />
                :
                null
            }
            </userData.Provider >
        </>
    )
}
export {userData};
export default Sections;
