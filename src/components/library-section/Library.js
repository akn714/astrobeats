import './Library.css'

import {
   Link
 } from "react-router-dom";

export function Library(){
    return (
        <>
            <div className='library-playlists'>
                <SavedPlaylist playlistName='playlist 1' playlistIcon='./saved-playlist-icon-2.png'/>
                <SavedPlaylist playlistName='playlist 2' playlistIcon='./saved-playlist-icon-2.png'/>
                <SavedPlaylist playlistName='favorites' playlistIcon='./favorites-icon-2.png' />
            </div>
        </>
    );
}

function SavedPlaylist(props){
    return (
        <>
            <div className='saved-playlist-item' >
                <img className='saved-playlist-item-icon' src={props.playlistIcon} alt='saved-playlist-item-icon' />
                <div><Link to='/playlist'> {props.playlistName}</Link></div>
            </div>
        </>
    );
}