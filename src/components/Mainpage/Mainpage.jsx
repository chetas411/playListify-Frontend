import React,{useState,createContext} from 'react';
import SideBar from './SideBar/SideBar';
import Section from './Section/Section';
import cImg from '../../assets/images/pexels-miguel-á-padriñán-3391932.jpg';

const DisplayDataContext = createContext();

const Mainpage = () => {
    const [sectionData,setSectiondata] = useState({
        imgUrl: cImg,
        text: "Top Tracks"
    });

    const updateSectionData = (data) =>{
        setSectiondata({
            imgUrl: data.imgUrl,
            text: data.text
        });
    };

    const displayValue = {
        sectionData,
        setSectiondata,
        updateSectionData
    }

    return (
        <div className="w-full h-screen grid grid-cols-5 lg:grid-cols-7 xl:grid-cols-9">
            <DisplayDataContext.Provider value={displayValue}>
                <SideBar />
                <Section />
            </DisplayDataContext.Provider>
        </div>
    )
}

export {DisplayDataContext};
export default Mainpage;
