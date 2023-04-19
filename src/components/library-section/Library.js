import './Library.css'
import SavedPlaylist from './SavedPlaylist';

export default function Library(){
    return (
        <>
            <SavedPlaylist playlistName='playlist 1' playlistIcon='./saved-playlist-icon-2.png'/>
            <SavedPlaylist playlistName='playlist 2' playlistIcon='./saved-playlist-icon-2.png'/>
            <SavedPlaylist playlistName='favorites' playlistIcon='./favorites-icon-2.png' />
        </>
    );
}