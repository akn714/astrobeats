import './SongOptions.css'

export function SongOptions(){
    return (
        <>
            <div id="song-options">
                <div className="so-div">
                    <div>
                        <button className="add-to-playlist">add to playlist</button>
                        <button className="remove-from-playlist">remove from playlist</button>
                    </div>
                </div>
            </div>
            <script>
                {
                    // document.getElementById('song-options').addEventListener('click', ()=>{
                    //     document.getElementById('song-options').style.display = 'none';
                    // })
                }
            </script>
        </>
    );
}