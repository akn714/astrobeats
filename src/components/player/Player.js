import './Player.css'

export default function Player(props){
    return (
        <>
            <div className='player'>
                <img className='player-song-icon' src={`${props.songicon}`}/>
                <div className='player-song-name'>{props.songname}</div>
            </div>
        </>
    );
}