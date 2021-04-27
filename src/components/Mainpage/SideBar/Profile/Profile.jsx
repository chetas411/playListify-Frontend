import React,{useContext} from 'react';
import {UserprofileContext} from '../../Mainpage'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Profile = () => {
    const username = useContext(UserprofileContext);
    return (
        <div className="flex flex-col justify-center items-center w-full h-20 space-y-2">
            <AccountCircleIcon style={{fontSize: "2rem", color: "#454545"}} />
            <h1 className="text-base text-green-400">{username}</h1>
        </div>
    )
}

export default Profile;
