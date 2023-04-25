import './Player.css'

import {
   Link
 } from "react-router-dom";

export function Player(props){
    return (
        <>
            <div className='player'>
                <div className='player-song'>
                    <img className='player-song-icon' src='./saved-playlist-icon-2.png' alt={`${props.songname}`}/>
                    <div className='player-song-info'>
                        <p className='player-song-info-songname'>{props.songname}</p>
                        <p className='player-song-info-artist'>{props.artist}</p>
                    </div>
                </div>
                <div className='player-controller'>
                    <input type='range' />
                </div>
            </div>
        </>
    );
}