import React,{createContext} from 'react';

const UserProfileContext = createContext();

const UserProfileContextProvider = (props) => {
    return (
        <UserProfileContext.Provider value={props.value}>
            {props.children}
        </UserProfileContext.Provider>
    )
}

export {UserProfileContext};
export default UserProfileContextProvider;
