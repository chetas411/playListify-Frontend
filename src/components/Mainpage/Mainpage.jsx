import React,{useState,createContext,useEffect} from 'react';
import queryString from 'query-string';
import QueryString from 'querystring';
import axios from 'axios';
import SideBar from './SideBar/SideBar';
import Sections from './Sections/Sections';

// creating context to share this state with sibling components "Sections" and "SideBar"
// for syncing the change in background image in section with change in active state of buttons
const DisplaySectionContext = createContext();
const ENDPOINT = "http://localhost:5000";

const Mainpage = () => {
    const [apicode,setApiCode] = useState("");
    const [apitoken,setApiToken] = useState("");
    const [sectionData,setSectiondata] = useState({
        tracks: true,
        artists: false,
        history: false
    });
    useEffect(async ()=>{
        let {code} = queryString.parse(window.location.search);
        setApiCode(code);
        // console.log(apicode);
        axios.get(`${ENDPOINT}/token?`+
            QueryString.stringify({
                code: apicode
            })
        ).then((response)=>{
            setApiToken(response.data.token)
        }).catch((err)=>{
            console.log(err);
        })
    },[apicode]);

    const updateSectionData = (data) =>{
        setSectiondata(data);
    };

    const displayValue = {
        sectionData,
        setSectiondata,
        updateSectionData
    }
    return (
        <div className="w-full h-full grid grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
            {
                (apitoken)?
                <DisplaySectionContext.Provider value={displayValue}>
                    <SideBar />
                    <Sections />
                </DisplaySectionContext.Provider>
                :
                <h1>Token is awaiting</h1>
            }
        </div>
    )
}

export {DisplaySectionContext};
export default Mainpage;
