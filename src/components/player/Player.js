import { useState } from 'react';
import './Player.css'

import {
   Link
 } from "react-router-dom";

export function Player(props){

    const [song, setSong] = useState({
       songname: null,
       artist: null 
    });

    return (
        <>
            <div className='player'>
	            <audio id="audio" type="audio/mp3" src="./test-song/Illegal Weapon 2.0 - Street Dancer 3D 128 Kbps.mp3"></audio>
                <div className='player-top-row'>
                    <div className='player-song'>
                        <img className='player-song-icon' src='./saved-playlist-icon-2.png' alt={`${props.songname}`}/>
                        <div className='player-song-info'>
                            <p className='player-song-info-songname'>{props.songname}</p>
                            <p className='player-song-info-artist'>{props.artist}</p>
                        </div>
                    </div>
                    <div className='player-top-row-controllers'>
                        <div className='player-top-row-controllers-upper'>
                            <img className='player-top-row-controllers-big' src='./player icons/prev-next.png' alt='prev' style={{'rotate':'180deg'}} />
                            <img src='./player icons/backward-10s.png' alt='backward-10s' onClick={()=>{document.getElementById('audio').currentTime=document.getElementById('audio').currentTime-10}} />
                            <img className='player-top-row-controllers-big play-pause-btn' onClick={PlayingStateHandler} src='./player icons/play.png' alt='play' />
                            <img src='./player icons/forward-10s.png' alt='forward-10s.png' onClick={()=>{document.getElementById('audio').currentTime=document.getElementById('audio').currentTime+10}} />
                            <img className='player-top-row-controllers-big' src='./player icons/prev-next.png' alt='next' />
                        </div>
                        <div className='player-top-row-controllers-volume'>
                            <input type='range' className='player-top-row-controllers-volume-btn' min='0' max='100' onChange={()=>{
                                document.getElementById('audio').volume = document.getElementsByClassName('player-top-row-controllers-volume-btn')[0].value/100;
                            }} />
                        </div>
                    </div>
                </div>
                <div className='player-controller'>
                    <input type='range' className='player-controller-range' min='0' max='188.656327' onChange={()=>{
        if(!audio.paused){
            document.getElementsByClassName('play-pause-btn')[0].src='./player icons/pause.png';
            audio.play();
        }
        else{
            document.getElementsByClassName('play-pause-btn')[0].src='./player icons/play.png';
            audio.pause();
        }
                        document.getElementById('audio').currentTime = document.getElementsByClassName('player-controller-range')[0].value;
                    }}/>
                </div>
            </div>
        </>
    );

    function PlayingStateHandler(){
        let audio = document.getElementById('audio');
        if(audio.paused){
            document.getElementsByClassName('play-pause-btn')[0].src='./player icons/pause.png';
            audio.play();
            return;
        }
        document.getElementsByClassName('play-pause-btn')[0].src='./player icons/play.png';
        audio.pause();
    }
}