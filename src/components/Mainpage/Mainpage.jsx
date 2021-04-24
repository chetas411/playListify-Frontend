import React,{useState,createContext} from 'react';
import SideBar from './SideBar/SideBar';
import Sections from './Sections/Sections';

// creating context to share this state with sibling components "Sections" and "SideBar"
// for syncing the change in background image in section with change in active state of buttons
const DisplaySectionContext = createContext();

const Mainpage = () => {
    const [sectionData,setSectiondata] = useState({
        tracks: true,
        artists: false,
        history: false
    });

    const updateSectionData = (data) =>{
        setSectiondata(data);
    };

    const displayValue = {
        sectionData,
        setSectiondata,
        updateSectionData
    }

    return (
        <div className="w-full h-screen grid grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
            <DisplaySectionContext.Provider value={displayValue}>
                <SideBar />
                <Sections />
            </DisplaySectionContext.Provider>
        </div>
    )
}

export {DisplaySectionContext};
export default Mainpage;
