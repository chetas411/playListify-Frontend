import React,{useState,createContext,useEffect} from 'react';
import queryString from 'query-string';
import QueryString from 'querystring';
import axios from 'axios';
import SideBar from './SideBar/SideBar';
import Sections from './Sections/Sections';

// creating context to share this state with sibling components "Sections" and "SideBar"
// for syncing the change in background image in section with change in active state of buttons
const DisplaySectionContext = createContext();
const UserprofileContext = createContext();
const ENDPOINT = "http://localhost:5000";

const Mainpage = () => {
    const [apicode,setApiCode] = useState(""); // getting auth code from spotify
    const [apitoken, setApiToken] = useState(""); //setting token for making request to api
    const [userProfile,setUserprofile] = useState("");
    
    //This state is being used to control which of the 3 section to be rendered on mainpage
    const [sectionData,setSectiondata] = useState({
        tracks: true,
        artists: false,
        history: false
    });

    //setting token on backend 
    useEffect(()=>{
        let {code} = queryString.parse(window.location.search);
        setApiCode(code);
        const getToken = async ()=>{
            await axios.get(`${ENDPOINT}/token?`+
                QueryString.stringify({
                code: apicode
            }))
            .then((response)=>{
                setApiToken(response.data.token)
            }).catch((err)=>{console.log(err);})

            await axios.get(`${ENDPOINT}/user`)
                    .then((response)=>{
                        setUserprofile(response.data);
                    }).catch((err)=>console.log(err))
        }
        getToken();
    },[apicode]);

    //this function is being passed on to the child components via context to update the state
    const updateSectionData = (data) =>{
        setSectiondata(data);
    };

    const displayValue = {
        sectionData,
        setSectiondata,
        updateSectionData
    };
    return (
        <>
            {
                (apitoken)?
                <div className="w-full h-full grid grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
                    <DisplaySectionContext.Provider value={displayValue}>
                        <UserprofileContext.Provider value={userProfile}>
                            <SideBar />
                        </UserprofileContext.Provider>
                        <Sections />
                    </DisplaySectionContext.Provider>
                </div>
                :
                <div className=" flex flex-col w-screen h-screen bg-gray-800 justify-items-center items-center align-middle">
                   <h1 className="animate-bounce text-6xl text-green-400 my-auto">
                        Loading.... 
                   </h1>
                </div>
            }
        </>
    )
}

export {DisplaySectionContext};
export {UserprofileContext};
export default Mainpage;
