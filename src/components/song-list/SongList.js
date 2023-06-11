import './SongList.css'
import { useState } from 'react';

import { songs } from './songsData';

export function SongList() {

    const [Song, setSong] = useState({
        id: null,
        songname: null,
        artist: null,
        src: null
    })

    return (
        <>
            {/* <textarea type='text' onChange={()=>{
                console.log('chanding')
                setSong(JSON.parse(document.getElementsByTagName('textarea')[0].value))
                }} style={{"position":"absolute"}} value={`{
                    "id": null,
                    "songname": "no song selected",
                    "artist": "unknown",
                    "src": null,
                    "isfavorites": false
                }`}>
            </textarea> */}
            <div className='song-list'>
                {/* <audio controls className='song' id={`song#${Song.key}`} type="audio/mp3" src={`${Song.src}`} /> */}

                {
                    songs.map((song) => {
                        {
                            return (
                                <div key={song.id}>
                                    <SongItem songIcon='./saved-playlist-icon-2.png' song={song} />
                                    <div className='song-item-breaker'></div>
                                </div>
                            )
                        }
                    })
                }
                {/* 
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' /> */}
            </div>
        </>
    );



    function SongItem(props) {
        const [isPlaying, setIsPlaying] = useState(false);

        return (
            <>
                <div className='song-item' onClick={() => { songClickHandler(props.song, setIsPlaying) }}>
                    <div className='song-item-icon-container'>
                        <img className='song-item-icon' src={props.songIcon} alt='song-item-icon'></img>
                    </div>
                    <div className='song-item-name'>
                        <div className='song-songname' style={isPlaying ? ({ 'color': '#c300c3' }) : ({})}>{props.song.songname}</div>
                        <div className='song-singer' style={isPlaying ? ({ 'color': '#396de3' }) : ({})}>{props.song.artist}</div>
                    </div>
                </div>
            </>
        );

        function songClickHandler(song, setisplaying) {
            console.log('------------------------------------------------------------------');
            
            document.getElementById('song').pause();

            // setInterval(() => {
            //     console.log('up : ', isPlaying)
            // }, 1000);
            // console.log(isPlaying)
            setisplaying(!isPlaying);
            // console.log(isPlaying)
            setSong(song);
            // setInterval(() => {
            //     console.log('down : ', isPlaying)
            // }, 1000);
            
            document.getElementsByClassName('play-pause-btn')[0].src = './player icons/pause.png';
            document.getElementById('song').setAttribute('src', song.src);
            document.getElementsByClassName('player-controller-range')[0].value = 0;
            document.getElementsByClassName('player-song-info-songname')[0].innerText = song.songname
            document.getElementsByClassName('player-song-info-artist')[0].innerText = song.artist

            setTimeout(()=>{
                document.getElementsByClassName('player-controller-range')[0].setAttribute('max', document.getElementById('song').duration*10);
                // console.log('asdf')
            }, 100)
            
            document.getElementById('song').play();
        }
    }
}
