import './SongList.css'

export default function SongList(){
    return (
        <>
            <div className='song-list'>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' singer='Tanishk B,Jasmine S,Garry S' isPlaying={false}/>
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' singer='Tanishk B,Jasmine S,Garry S' isPlaying={false}/>
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' singer='Tanishk B,Jasmine S,Garry S' isPlaying={false}/>
                <div className='song-item-breaker'></div>
                <SongItem songIcon='./saved-playlist-icon-2.png' songName='Illegal Weapon' singer='Tanishk B,Jasmine S,Garry S' isPlaying={false}/>
            </div>
        </>
    );
}

function SongItem(props){
    return (
        <>
            <div className='song-item'>
                <img className='song-item-icon' src={props.songIcon} alt='song-item-icon'></img>
                <div className='song-item-name'>
                    <div className='song-songname'>{props.songName}</div>
                    <div className='song-singer'>{props.singer}</div>
                </div>
            </div>
        </>
    );
}