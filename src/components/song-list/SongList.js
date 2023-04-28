import './SongList.css'
import { useState } from 'react';

import { songs } from '../../../public/songsData';

export function SongList() {

    const [Song, setSong] = useState({
        id: null,
        songname: null,
        artist: null,
        src: null
    })

    return (
        <>
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
                <div className='song-item' onClick={() => { songClickHandler(props.song) }}>
                    <img className='song-item-icon' src={props.songIcon} alt='song-item-icon'></img>
                    <div className='song-item-name'>
                        <div className='song-songname' style={isPlaying ? ({ 'color': '#c300c3' }) : ({})}>{props.song.songname}</div>
                        <div className='song-singer' style={isPlaying ? ({ 'color': '#396de3' }) : ({})}>{props.song.artist}</div>
                    </div>
                </div>
            </>
        );

        function songClickHandler(song) {
            console.log('------------------------------------------------------------------');
            document.getElementsByClassName('player-controller-range')[0].value = 0;
            // console.log('max -> ', document.getElementsByClassName('player-controller-range')[0].getAttribute('max'))
            document.getElementsByClassName('player-controller-range')[0].setAttribute('max', document.getElementById('song').duration*10);
            setIsPlaying(!isPlaying);
            console.log(document.getElementById('song').duration)
            document.getElementById('song').pause();
            // console.log('song -> ', Song)
            setSong(song);
            // console.log('song -> ', Song)
            document.getElementById('song').setAttribute('src', song.src);
            // setTimeout(() => {
                document.getElementById('song').play();
                // console.log('asdf')
                // console.log(song, document.getElementById('song'))
                // console.log('song -> ', Song)
            // }, 500)
            // console.log(song, document.getElementById('song'))
        }
    }
}
