import React,{useContext} from 'react';
import {UserProfileContext} from '../../../../contexts/UserProfileContextProvider';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Profile = () => {
    const {display_name} = useContext(UserProfileContext);
    return (
        <div className="flex flex-col justify-center items-center w-full h-20 space-y-2">
            <AccountCircleIcon style={{fontSize: "2rem", color: "#454545"}} />
            <h1 className="text-base text-green-400">{display_name}</h1>
        </div>
    )
}

export default Profile;
