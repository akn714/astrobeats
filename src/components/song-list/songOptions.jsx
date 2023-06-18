import './SongOptions.css'

export function SongOptions(){
    return (
        <>
            <div className="song-options">
                <div className="so-div">
                    <div>
                        <button className="add-to-playlist">add to playlist</button>
                        <button className="remove-from-playlist">remove from playlist</button>
                    </div>
                </div>
            </div>
        </>
    );
}