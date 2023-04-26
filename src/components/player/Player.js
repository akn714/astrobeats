import './Player.css'

import {
   Link
 } from "react-router-dom";

export function Player(props){
    return (
        <>
            <div className='player'>
                <div className='player-top-row'>
                    <div className='player-song'>
                        <img className='player-song-icon' src='./saved-playlist-icon-2.png' alt={`${props.songname}`}/>
                        <div className='player-song-info'>
                            <p className='player-song-info-songname'>{props.songname}</p>
                            <p className='player-song-info-artist'>{props.artist}</p>
                        </div>
                    </div>
                    <div className='player-top-row-controllers'>
                        <img className='player-top-row-controllers-big' src='./player icons/prev-next.png' alt='prev' style={{'rotate':'180deg'}} />
                        <img src='./player icons/backward-10s.png' alt='backward-10s' />
                        <img className='player-top-row-controllers-big play-pause-btn' onClick={PlayingStateHandler} src='./player icons/play.png' alt='play' />
                        <img src='./player icons/forward-10s.png' alt='forward-10s.png' />
                        <img className='player-top-row-controllers-big' src='./player icons/prev-next.png' alt='next' />
                    </div>
                </div>
                <div className='player-controller'>
                    <input type='range' />
                </div>
            </div>
        </>
    );

    function PlayingStateHandler(){
        if(document.getElementsByClassName('play-pause-btn')[0].src==`${window.location.href}player%20icons/play.png`){
            document.getElementsByClassName('play-pause-btn')[0].src='./player icons/pause.png';
            return;
        }
        document.getElementsByClassName('play-pause-btn')[0].src='./player icons/play.png';
    }
}