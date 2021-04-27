import React,{createContext} from 'react';

const UserDataContext = createContext();

const UserDataContextProvider = (props) => {
    return (
        <UserDataContext.Provider value={props.value}>
            {props.children}
        </UserDataContext.Provider>
    )
}

export {UserDataContext};
export default UserDataContextProvider;
