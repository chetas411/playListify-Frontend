import React from 'react';
import ActionButton from './ActionButton/ActionButton';
import FavoriteIcon from '@material-ui/icons/FavoriteBorder';
import StarOutlineOutlinedIcon from '@material-ui/icons/StarOutlineOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';

const Actions = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full space-y-4">
            <ActionButton action="Top Tracks">
                <FavoriteIcon style={{ fontSize: "2.5rem", color: "#454545" }} />
            </ActionButton>
            <ActionButton action="Top Artists">
                <StarOutlineOutlinedIcon style={{ fontSize: "2.5rem", color: "#454545" }} />
            </ActionButton>
            <ActionButton action="History">
                <HistoryOutlinedIcon style={{ fontSize: "2.5rem", color: "#454545" }} />
            </ActionButton>
        </div>
    )
}

export default Actions
