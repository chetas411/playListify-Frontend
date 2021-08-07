import React,{useContext,useState,useEffect} from 'react';
import axios from 'axios';
import Section from './Section/Section';
import {DisplaySectionContext} from '../../../contexts/DisplaySectionContextProvider';
import UserDataContextProvider from '../../../contexts/UserDataContextProvider';
import bgforTopTracks from '../../../assets/images/bg-for-tracks.jpg';
import bgforTopArtists from '../../../assets/images/bg-for-artists.jpg';
import bgforHistory from '../../../assets/images/bg-for-history.jpg'

const Sections = () => {

    // Setting data fetched from backend in states
    const [apidata,setApiData] = useState({
        tracks: [],
        artists: [],
        history: []
    });

    // api calls for data
    useEffect(()=>{
        const fetchData = async ()=>{
        await axios.get(`${process.env.REACT_APP_ENDPOINT}/tracks`)
            .then((response)=>{
                setApiData((prevState)=>{
                    return {
                        ...prevState,
                        tracks: response.data
                    }
                })
            })
            .catch((err)=>console.log(err));
            
        await axios.get(`${process.env.REACT_APP_ENDPOINT}/artists`)
            .then((response)=>{
                setApiData((prevState) => {
                    return {
                        ...prevState,
                        artists: response.data
                    }
                })
            })
            .catch((err)=>console.log(err));
            
            
        await axios.get(`${process.env.REACT_APP_ENDPOINT}/history`)
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

    //This is used to decide which section to be rendered
    const {sectionData} = useContext(DisplaySectionContext); 
    return (
        <>
            <UserDataContextProvider value={apidata}>        
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
            </UserDataContextProvider>
        </>
    )
}

export default Sections;
