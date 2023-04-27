import './SongList.css'
import { useState } from 'react';

import { songs } from './songsData';

export function SongList() {

    const [Song, setSong] = useState({
        key: 1,
        songname: '2U',
        artist: 'Justin Bieber',
        src: './test-song/2U - Justin Bieber.mp3'
    })

    return (
        <>
            <div className='song-list'>
                <audio controls className='song' id={`song#${Song.key}`} type="audio/mp3" src={`${Song.src}`} />

                {
                    songs.map((song)=>{
                        {
                            return (
                                <>
                                    <SongItem key={song.id} songIcon='./saved-playlist-icon-2.png' song={song} />
                                    <div className='song-item-breaker'></div>
                                </>
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
                <div className='song-item' onClick={(song)=>{songClickHandler(props.song)}}>
                    <img className='song-item-icon' src={props.songIcon} alt='song-item-icon'></img>
                    <div className='song-item-name'>
                        <div className='song-songname' style={isPlaying ? ({ 'color': '#c300c3' }) : ({})}>{props.song.songname}</div>
                        <div className='song-singer' style={isPlaying ? ({ 'color': '#396de3' }) : ({})}>{props.song.artist}</div>
                    </div>
                </div>
            </>
        );

        function songClickHandler(song) {
            setIsPlaying(!isPlaying);
            document.getElementById(`song#${Song.key}`).pause();
            setSong(song);
            document.getElementById(`song#${Song.key}`).play();
        }
    }
}
