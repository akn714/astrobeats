import './SavedPlaylist.css'

export default function SavedPlaylist(props){
    return (
        <>
            <div className='saved-playlist-item'>
                <img className='saved-playlist-item-icon' src={props.playlistIcon} alt='saved-playlist-item-icon' />
                <div>{props.playlistName}</div>
            </div>
        </>
    );
}