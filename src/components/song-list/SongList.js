import './SongList.css'
import { useState } from 'react';

export function SongList() {
    return (
        <>
            <div className='song-list'>
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
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' artist='Tanishk B,Jasmine S,Garry S' />
            </div>
        </>
    );
}

function SongItem(props) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <>
            <div className='song-item' onClick={songClickHandler}>
                <img className='song-item-icon' src={props.songIcon} alt='song-item-icon'></img>
                <div className='song-item-name'>
                    <div className='song-songname' style={isPlaying ? ({ 'color': '#c300c3' }) : ({})}>{props.songName}</div>
                    <div className='song-singer' style={isPlaying ? ({ 'color': '#396de3' }) : ({})}>{props.artist}</div>
                </div>
            </div>
        </>
    );

    function songClickHandler() {
        setIsPlaying(!isPlaying);
    }
}