import './Library.css'

export default function Library(){
    return (
        <>
            <SavedPlaylist playlistName='playlist 1' playlistIcon='./saved-playlist-icon-2.png'/>
            <SavedPlaylist playlistName='playlist 2' playlistIcon='./saved-playlist-icon-2.png'/>
            <SavedPlaylist playlistName='favorites' playlistIcon='./favorites-icon-2.png' />
        </>
    );
}

function SavedPlaylist(props){
    return (
        <>
            <div className='saved-playlist-item'>
                <img className='saved-playlist-item-icon' src={props.playlistIcon} alt='saved-playlist-item-icon' />
                <div>{props.playlistName}</div>
            </div>
        </>
    );
}