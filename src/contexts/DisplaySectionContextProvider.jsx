// creating context to share this state with sibling components "Sections" and "SideBar"
// for syncing the change in background image in section with change in active state of buttons
import React,{createContext} from 'react'

const DisplaySectionContext = createContext();

const DisplaySectionContextProvider = (props) => {
    return (
        <DisplaySectionContext.Provider value={props.value}>
            {props.children}
        </DisplaySectionContext.Provider>
    )
}

export {DisplaySectionContext};
export default DisplaySectionContextProvider;
