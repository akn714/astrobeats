import './SongOptions.css'

export function SongOptions() {
    return (
        <>
            <div id="song-options">
                <div className="so-div">
                    <div style={{"position" : "relative"}}>
                        <button className='so-cut-btn' onClick={()=>{
                            document.getElementById('song-options').style.display = 'none';  
                        }}>X</button>
                        <button className="add-to-playlist" 
                            onClick={() =>{
                                if(document.getElementsByClassName('atpo-div')[0].style.display=='none'){
                                    document.getElementsByClassName('add-to-playlist')[0].style.background = '#80808014';
                                    document.getElementsByClassName('atpo-div')[0].style.display='flex';
                                    document.getElementsByClassName('so-playlists')[0].style.height = '170px';
                                    document.getElementsByClassName('so-div')[0].style.height = '318px';
                                }
                                else{
                                    document.getElementsByClassName('add-to-playlist')[0].style.background = 'none';
                                    document.getElementsByClassName('atpo-div')[0].style.display='none';
                                    document.getElementsByClassName('so-playlists')[0].style.height = '0px'; 
                                    document.getElementsByClassName('so-div')[0].style.height = '146px';
                                }
                            }}>Add to playlist</button>
                        <div className='so-playlists'>
                            <div className="atpo-div">
                                <div>
                                    <label className="atpo-item">
                                        <p>test playlist 1</p>
                                        <input type="checkbox" />
                                        <span className='atpo-checkbox'></span>
                                    </label>
                                    <label className="atpo-item">
                                        <p>test playlist 2</p>
                                        <input type="checkbox" />
                                        <span className='atpo-checkbox'></span>
                                    </label>
                                    <label className="atpo-item">
                                        <p>test playlist 3</p>
                                        <input type="checkbox" />
                                        <span className='atpo-checkbox'></span>
                                    </label>
                                    <button className='atpo-btn'>Add</button>
                                </div>
                            </div>
                        </div>
                        <button style={{ "background": "#ff000014" }} className="remove-from-playlist">Remove from playlist</button>
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