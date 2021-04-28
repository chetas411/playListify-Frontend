import React, { useContext, useState } from 'react';
import axios from 'axios';
import ReactLoading from 'react-loading';
import Modal from '../../../../UI/Modal';
import { UserProfileContext } from '../../../../../contexts/UserProfileContextProvider';
import { UserDataContext } from '../../../../../contexts/UserDataContextProvider';

const ENDPOINT = "http://localhost:5000/createplaylist";
const TopShowcase = (props) => {
    const [url, setUrl] = useState("");
    const [showModal, setShowModal] = useState(false);
    const { id } = useContext(UserProfileContext);
    const userData = useContext(UserDataContext);

    const createPlaylist = async () => {
        setShowModal(true);
        if (url === "") {
            await axios.post(`${ENDPOINT}/${id}/${props.heading}`, userData[props.ukey])
                .then((response) => {
                    setUrl(response.data.pl_url);
                })
                .catch((err) => {
                    console.log("Could not create playlist");
                    console.log(err);
                })
        }
    }
    const closeModal = ()=>{
        setShowModal(false);
    }
    return (
        <div className="relative w-full h-96 bg-center bg-cover" style={{ backgroundImage: `url(${props.bgImg})` }}>
            <h1 className="absolute left-4 bottom-4 text-6xl text-white">{props.heading}</h1>
            <button onClick={createPlaylist} className="absolute right-4 top-4 py-2 px-4 text-lg bg-green-400 hover:bg-green-500 text-white rounded focus:outline-none">Create Playlist</button>
            {
                (showModal)?
                    <Modal close={closeModal}>
                        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-800 border-4 border-green-400 rounded-xl shadow-2xl z-50">
                            {
                                (url === "") ?
                                    <>
                                        <h1 className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-green-400 text-center">
                                            <ReactLoading type="spinningBubbles" color="#34d399" height={100} width={100} />
                                        </h1>
                                        <h1 className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-green-400 text-center">
                                            Wait...
                                        </h1>
                                    </>
                                    :
                                    <>
                                        <h1 className="absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2 text-3xl text-green-400 text-center">
                                            Your Playlist is ready !
                                        </h1>
                                        <button className="absolute left-1/2 bottom-1/4 transform -translate-x-1/2 -translate-y-1/2 w-auto p-2 text-2xl text-white bg-green-400 hover:bg-green-500 rounded-md focus:outline-none">
                                            <a href={url} target="_blank" rel="noreferrer">Open Playlist</a>
                                        </button>
                                    </>
                            }
                        </div>
                    </Modal>
                    : null
            }
        </div>
    )
}

export default TopShowcase;
