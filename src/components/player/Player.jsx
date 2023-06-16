import { useState } from 'react';
import './Player.css'

export function Player(props) {

    const [song, setSong] = useState({
        songname: null,
        artist: null
    });

    return (
        <>
            <div className='player'>
                {/* removed controls */}
                <audio id='song' type="audio/mp3" src={null}></audio>
                <div className='player-top-row'>
                    <div className='player-song'>
                        <img className='player-song-icon' src='./saved-playlist-icon-2.png' alt={`${props.songname}`} />
                        <div className='player-song-info'>
                            <p className='player-song-info-songname'>{props.songname}</p>
                            <p className='player-song-info-artist'>{props.artist}</p>
                        </div>
                    </div>
                    <div className='player-top-row-controllers'>
                        <div className='player-top-row-controllers-upper'>

                            <img className='player-top-row-controllers-big' src='./player icons/prev-next.png' alt='prev' style={{ 'rotate': '180deg' }} />
                            <img src='./player icons/backward-10s.png' alt='backward-10s' onClick={() => { document.getElementById('song').currentTime -= 10 }} />
                            <img className='player-top-row-controllers-big play-pause-btn' onClick={PlayingStateHandler} src='./player icons/play.png' alt='play' />
                            <img src='./player icons/forward-10s.png' alt='forward-10s.png' onClick={() => { document.getElementById('song').currentTime += 10 }} />
                            <img className='player-top-row-controllers-big' src='./player icons/prev-next.png' alt='next' />
                        </div>
                        <div className='player-top-row-controllers-volume'>
                            <input type='range' className='player-top-row-controllers-volume-btn' min='0' max='100' onChange={() => {
                                document.getElementById('song').volume = document.getElementsByClassName('player-top-row-controllers-volume-btn')[0].value / 100;
                            }} />
                        </div>
                    </div>
                </div>
                <div className='player-controller'>
                    <script>
                    {
                        setInterval(() => {
                            document.getElementsByClassName('player-controller-range')[0].value = document.getElementById('song').currentTime * 10
                            if(document.getElementById('song').currentTime==document.getElementById('song').duration){
                                document.getElementsByClassName('play-pause-btn')[0].src = './player icons/play.png';
                            }
                        }, 1000)
                    }
                    </script>
                    <div className='song-played-time'>
                        <script>
                            {
                                // document.getElementsByClassName('.song-played-time-min')[0].innerHTML = document.getElementById('song').currentTime;
                            }
                        </script>
                        <p className='song-played-time-min'></p>
                        :
                        <p className='song-played-time-sec'></p>
                    </div>
                    <input type='range' className='player-controller-range' onChange={() => {
                        let song = document.getElementById('song');
                        document.getElementsByClassName('player-controller-range')[0].setAttribute('max', song.duration * 10);
                        if (!song.paused) {
                            document.getElementsByClassName('play-pause-btn')[0].src = './player icons/pause.png';
                            song.play();
                        }
                        else {
                            document.getElementsByClassName('play-pause-btn')[0].src = './player icons/play.png';
                            song.pause();
                        }
                        document.getElementById('song').currentTime = document.getElementsByClassName('player-controller-range')[0].value / 10;
                    }} />
                    <div className='song-total-time'>
                        <p className='song-total-time-min'></p>
                        :
                        <p className='song-total-time-sec'></p>
                    </div>
                </div>
            </div>
        </>
    );
    function PlayingStateHandler() {
        let song = document.getElementById('song');
        if (song.paused) {
            document.getElementsByClassName('play-pause-btn')[0].src = './player icons/pause.png';
            song.play();
            return;
        }
        document.getElementsByClassName('play-pause-btn')[0].src = './player icons/play.png';
        song.pause();
    }
}
